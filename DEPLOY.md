# Deploying OnchainSuite to Cloudflare

The site is a **static export** (`next.config.mjs` → `output: "export"`), so it ships
as plain static files and runs great on **Cloudflare Pages**. No server/runtime, no backend.

## One-time setup

```bash
cd "onchainsuite"

# 1. Authenticate Wrangler with your Cloudflare account (opens a browser)
npx wrangler login

# 2. (first deploy only) create the Pages project
npx wrangler pages project create onchainsuite --production-branch main
```

## Deploy

```bash
npm run deploy
```

This runs `next build` (writing static files to `./out`) and
`wrangler pages deploy ./out --project-name onchainsuite`.
Your site goes live at `https://onchainsuite.pages.dev`.

## Point onchainsuite.com at it

Requires `onchainsuite.com` to be a zone in the **same** Cloudflare account.
(If it isn't yet: Cloudflare dashboard → Add a site → update your registrar's nameservers.)

Then: **Cloudflare dashboard → Workers & Pages → onchainsuite → Custom domains →
Set up a custom domain →** enter `onchainsuite.com` (and `www.onchainsuite.com` if you want
the redirect). Cloudflare creates the DNS records automatically because the zone lives there.

## Notes

- `npm run dev` still works for local development.
- To preview the production build locally: `npx serve out` (or any static server).
- There is **no backend** — the early-access form's submit is a client-side success
  state. Wire it to a CRM / Cal.com / webhook when ready (one handler in
  `components/EarlyAccessForm.tsx`).
- CI alternative to `wrangler login`: set `CLOUDFLARE_API_TOKEN` (Pages:Edit scope)
  as an env var and run `npm run deploy`.
