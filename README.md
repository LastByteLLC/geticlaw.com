# geticlaw.com

Landing page and marketing site for [iClaw](https://github.com/LastByteLLC/iClaw), a free, open-source AI assistant for Mac powered by Apple Foundation Models.

**Live site:** [geticlaw.com](https://geticlaw.com)

## Stack

- [Astro](https://astro.build) (hybrid mode — static pages + server endpoints)
- [Cloudflare Pages](https://pages.cloudflare.com) for hosting
- [Cloudflare D1](https://developers.cloudflare.com/d1/) for anonymous feedback and crash log storage
- [GradFlow](https://gradflow.meera.dev/) for the animated WebGL gradient

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed automatically via GitHub Actions on push to `main`. Requires these repository secrets:

| Secret | Description |
|---|---|
| `CLOUDFLARE_API_TOKEN` | API token with Pages and D1 permissions |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |
| `CLOUDFLARE_PROJECT_NAME` | Cloudflare Pages project name |

## Project structure

```
src/
  content/copy.ts     # All user-facing copy and config (single source of truth)
  components/         # Astro and React components
  pages/              # Routes: /, /features, /privacy, /terms, /faq
  pages/api/          # Server endpoints: /api/feedback, /api/crash-logs
  styles/global.css   # Design tokens and base styles
db/schema.sql         # D1 database schema
public/.well-known/   # AASA and asset links
```

## License

This website is licensed under [Apache 2.0](LICENSE). The iClaw app itself is licensed under [AGPL-3.0](https://github.com/LastByteLLC/iClaw/blob/main/LICENSE).

Copyright Last Byte LLC.
