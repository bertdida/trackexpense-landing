import { z } from 'zod';
import { NextResponse } from 'next/server';
import { sheets, auth as sheetsAuth } from '@googleapis/sheets';
import RateLimiter from '@/app/services/RateLimiter';

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

const rateLimiter = new RateLimiter({
  windowSize: 15,
  maxRequests: 1,
});

export async function POST(request: Request) {
  try {
    const payload = schema.parse(await request.json());

    const detectedIp = request.headers.get('X-Forwarded-For') ?? 'unknown';
    const isRateLimited = rateLimiter.limit(detectedIp);

    if (isRateLimited) {
      return NextResponse.json({ success: false }, { status: 429 });
    }

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

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((error) => {
        errors[error.path.join('.')] = error.message;
      });

      return NextResponse.json({ success: false, errors }, { status: 400 });
    } else {
      console.error('An error occurred:', error);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  }
}
