export const prerender = false;

import type { APIRoute } from 'astro';

const skillFiles = import.meta.glob('/src/skills/*.md', {
  query: '?raw',
  import: 'default',
});

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  const path = `/src/skills/${slug}`;
  const loader = skillFiles[path];

  if (!loader) {
    return new Response('Not found', { status: 404 });
  }

  const content = (await loader()) as string;
  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
