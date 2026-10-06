# Deploying the OnchainSuite marketing site

The site is a **static export** (`next.config.mjs` → `output: "export"`), served as static assets
from a Cloudflare Worker named `onchainsuitewebdemo` on the **OnchainSuite Cloudflare account**
(onchainsuite@gmail.com, account ID `b839212181b7cbf64336ba5a93622046`). The account ID is pinned
in `wrangler.jsonc`, so a deploy cannot land on the personal or Datum Labs account by mistake.

Live at: https://onchainsuitewebdemo.onchainsuite.workers.dev

## Deploy

```bash
npx wrangler login   # once, as onchainsuite@gmail.com
npm run deploy       # next build, then wrangler deploy (uploads ./out)
```

Stop `npm run dev` first: building while the dev server runs breaks the dev server's `.next` folder.

## Notes

- `public/_headers` sets the content type of `/opengraph-image`, which is exported without an extension.
- Booking buttons link to `/early-access`; `components/ns/CalBooking.tsx` opens the Cal.com popup
  (`onchainsuite/15min`) instead. The link is set in `lib/data.ts` (`CAL_LINK`).
- onchainsuite.com is still served by Vercel (personal account) with DNS at GoDaddy. Pointing the
  domain here means adding it to this Cloudflare account and moving the records, including the
  Microsoft 365 email records and the `docs` CNAME to Mintlify.
