import { z } from 'zod';
import { NextResponse } from 'next/server';
import RateLimiter from '@/app/services/RateLimiter';

const schema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
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

    // https://developers.mailerlite.com/docs/subscribers.html#create-upsert-subscriber
    await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.MAILER_LITE_KEY}`,
      },
      body: JSON.stringify({
        email: payload.email,
        groups: [process.env.MAILER_LITE_GROUP_ID],
        fields: {
          referer_params: refererParams,
          form_source: payload.source,
        },
      }),
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
