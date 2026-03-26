export const prerender = false;

import type { APIRoute } from 'astro';

const skillFiles = import.meta.glob('/src/skills/*.md', {
  query: '?raw',
  import: 'default',
});

function deriveName(filename: string): string {
  return filename
    .replace('.md', '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
}

const gerundToImperative: Record<string, string> = {
  searching: 'Search',
  browsing: 'browse',
  creating: 'Create',
  reviewing: 'review',
  suggesting: 'suggest',
  retrieving: 'Retrieve',
  generating: 'Generate',
  reading: 'Read',
  summarizing: 'summarize',
  finding: 'Find',
  tweaking: 'tweak',
  managing: 'manage',
};

function degerund(text: string): string {
  return text.replace(/\b\w+ing\b/gi, (match) => {
    const key = match.toLowerCase();
    if (key in gerundToImperative) {
      const replacement = gerundToImperative[key];
      // Preserve leading capitalisation from original
      if (match[0] === match[0].toUpperCase()) {
        return replacement[0].toUpperCase() + replacement.slice(1);
      }
      return replacement[0].toLowerCase() + replacement.slice(1);
    }
    return match;
  });
}

function deriveDescription(content: string): string {
  const lines = content.split('\n');
  let firstParagraph = '';
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      firstParagraph = trimmed;
      break;
    }
  }
  const sentenceMatch = firstParagraph.match(/^[^.!?]+[.!?]/);
  let desc = sentenceMatch ? sentenceMatch[0].replace(/[.!?]$/, '') : firstParagraph;
  desc = desc.replace(/^A skill for\s+/i, '');
  desc = degerund(desc);
  return desc.charAt(0).toUpperCase() + desc.slice(1);
}

export const GET: APIRoute = async () => {
  const skills = [];

  for (const [path, loader] of Object.entries(skillFiles)) {
    const filename = path.split('/').pop()!;
    const content = (await loader()) as string;

    skills.push({
      name: deriveName(filename),
      filename,
      description: deriveDescription(content),
      version: 1,
      handle: null,
    });
  }

  skills.sort((a, b) => a.name.localeCompare(b.name));

  return new Response(JSON.stringify({ version: 1, skills }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
