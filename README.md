# My House Listing

Static Next.js site (no database, no backend, no contact form) for renting one home directly, with Google Ads conversion tracking.
Deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Edit the listing
- Text, price, amenities, FAQ, contact: `lib/property.ts`
- Photos: drop files into `public/images/gallery/` named like `01-living-room.jpg` (number = order, rest = caption). Picked up automatically by `scripts/gen-photos.mjs`. Resize to ~1800px wide first to keep the page fast.
- Look and feel (Clay & Pine design system): tokens and component classes in `app/globals.css`. Icons: Phosphor.

## Run
    npm install && npm run dev

## Deploy (GitHub Pages)
1. Push to a GitHub repo, branch `main`.
2. Settings > Pages > Source: **GitHub Actions**.
3. Settings > Secrets and variables > Actions > **Variables**:
   - `BASE_PATH` = `/<repo-name>` (leave empty with a custom domain)
   - `NEXT_PUBLIC_SITE_URL` = your final URL
   - `NEXT_PUBLIC_GOOGLE_ADS_ID` = `AW-XXXXXXXXX`
   - `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` = from Google Ads > Goals > Conversions

## Google Ads
Point your campaign's final URL at the site. A conversion fires when a visitor taps a WhatsApp button (`lib/ads.ts`). Contact is WhatsApp only; set your number in `lib/property.ts`.
