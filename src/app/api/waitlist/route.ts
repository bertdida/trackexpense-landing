import { z } from 'zod';
import { NextResponse } from 'next/server';

const schema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
  searchParams: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const payload = schema.parse(await request.json());
    console.log({
      ...payload,
      date: new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Manila',
      }),
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
