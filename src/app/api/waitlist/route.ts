import { z } from 'zod';
import { NextResponse } from 'next/server';
import { sheets, auth as sheetsAuth } from '@googleapis/sheets';

const schema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
});

const googleCredentials = JSON.parse(
  Buffer.from(String(process.env.GOOGLE_SERVICE_ACCOUNT_BASE64), 'base64').toString(
    'utf-8',
  ),
);

const auth = new sheetsAuth.GoogleAuth({
  credentials: googleCredentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheetsApi = sheets({
  version: 'v4',
});

export async function POST(request: Request) {
  try {
    const payload = schema.parse(await request.json());

    const referer = request.headers.get('referer') || '';
    let refererParams = referer.replace(request.headers.get('origin') || '', '');
    refererParams = refererParams.replace(/^\//, '');

    await sheetsApi.spreadsheets.values.append({
      auth,
      spreadsheetId: String(process.env.GOOGLE_SHEET_ID),
      range: 'Sheet1!A1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          [
            payload.email,
            payload.source,
            refererParams,
            new Date().toLocaleString('en-US', {
              timeZone: 'Asia/Manila',
            }),
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((error) => {
        errors[error.path.join('.')] = error.message;
      });

      return NextResponse.json(
        {
          success: false,
          errors,
        },
        { status: 400 },
      );
    } else {
      console.error('An error occurred:', error);
      return NextResponse.json(
        {
          success: false,
          message: 'An unexpected error occurred',
        },
        { status: 500 },
      );
    }
  }
}
