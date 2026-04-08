import { useEffect, useState } from 'react';
import { config } from '../../content/copy';

const CACHE_KEY = 'github-stars';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function getCached(): number | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { count, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL_MS) return null;
    return count;
  } catch {
    return null;
  }
}

function setCache(count: number) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ count, ts: Date.now() }));
  } catch {}
}

export default function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const cached = getCached();
    if (cached != null) {
      setStars(cached);
      return;
    }

    fetch(`https://api.github.com/repos/${config.githubRepo}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.stargazers_count != null) {
          setStars(data.stargazers_count);
          setCache(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, []);

  const formatted =
    stars != null
      ? stars >= 1000
        ? `${(stars / 1000).toFixed(1)}k`
        : String(stars)
      : null;

  return (
    <a
      href={config.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="github-stars-btn"
      title={`Star ${config.githubRepo} on GitHub`}
      aria-label={`Star ${config.githubRepo} on GitHub${formatted ? ` — ${formatted} stars` : ''}`}
    >
      <svg
        className="github-stars-icon"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
      </svg>
      <span className="github-stars-label">Star</span>
      {formatted != null && (
        <span className="github-stars-count">{formatted}</span>
      )}
    </a>
  );
}
