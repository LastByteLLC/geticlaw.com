import type { APIContext } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const ALLOWED_ORIGINS = [
  'https://geticlaw.com',
  'https://www.geticlaw.com',
];
const MAX_BODY_BYTES = 10_000;

function corsHeaders(origin: string | null) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  // Allow the native app (no Origin) and allowed web origins
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

export async function OPTIONS({ request }: APIContext) {
  const origin = request.headers.get('origin');
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST({ request }: APIContext) {
  const origin = request.headers.get('origin');
  const headers = corsHeaders(origin);

  // Block cross-origin web requests from unknown origins
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers,
    });
  }

  // Check Content-Length
  const contentLength = parseInt(request.headers.get('content-length') || '0', 10);
  if (contentLength > MAX_BODY_BYTES) {
    return new Response(JSON.stringify({ error: 'Payload too large' }), {
      status: 413,
      headers,
    });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Malformed JSON' }), {
      status: 400,
      headers,
    });
  }

  if (!body.message || typeof body.message !== 'string') {
    return new Response(JSON.stringify({ error: 'message is required' }), {
      status: 400,
      headers,
    });
  }

  const db = (env as any).DB;
  if (!db) {
    return new Response(JSON.stringify({ error: 'Database not configured' }), {
      status: 503,
      headers,
    });
  }

  try {
    await db
      .prepare(
        'INSERT INTO feedback (message, category, app_version) VALUES (?, ?, ?)',
      )
      .bind(
        body.message.slice(0, 5000),
        body.category?.slice(0, 50) || null,
        body.app_version?.slice(0, 20) || null,
      )
      .run();

    return new Response(JSON.stringify({ ok: true }), {
      status: 201,
      headers,
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers,
    });
  }
}
