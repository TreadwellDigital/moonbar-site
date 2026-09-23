# Moonbar — Developer Setup Guide

## Prerequisites
- Node.js 20+
- Git
- A [Vercel](https://vercel.com) account (free)
- A [Sanity](https://sanity.io) account (free)

---

## 1. Create Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage) → **New project**
2. Name it `Moonbar`, choose the `production` dataset
3. Copy your **Project ID** — you'll need it in step 3

---

## 2. Clone & Install

```bash
git clone https://github.com/YOUR_ORG/moonbar.git
cd moonbar
npm install   # installs all workspaces
```

---

## 3. Configure Environment Variables

```bash
cp apps/web/.env.example apps/web/.env.local
```

Edit `apps/web/.env.local` and fill in:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — from step 1
- `NEXT_PUBLIC_REGION` — `AU` for local development
- `SANITY_REVALIDATE_SECRET` — any random string for local dev
- `ALLSTAR_READERS_ENDPOINT` / `ALLSTAR_API_KEY` — from Allstar Psychics Ltd

---

## 4. Run Locally

```bash
# Run the Next.js site (AU region by default)
npm run dev
# → http://localhost:3000

# Run Sanity Studio (in a separate terminal)
npm run studio
# → http://localhost:3333
```

---

## 5. Deploy to Vercel (Three Sites)

### Site 1 — Australia (moonbar.com.au)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd apps/web
vercel --prod
```

In Vercel project settings → Environment Variables:
```
NEXT_PUBLIC_REGION          = AU
NEXT_PUBLIC_SANITY_PROJECT_ID = your-project-id
NEXT_PUBLIC_SANITY_DATASET    = production
SANITY_API_READ_TOKEN         = your-token
SANITY_REVALIDATE_SECRET      = your-secret
ALLSTAR_READERS_ENDPOINT      = https://api.allstarpsychics.co.uk/readers
ALLSTAR_API_KEY               = your-key
```

Connect domain: **moonbar.com.au**

### Site 2 — United Kingdom (moonbar.co.uk)

Create a second Vercel project pointing to the same GitHub repo.
Set `NEXT_PUBLIC_REGION=UK`. Connect domain **moonbar.co.uk**.

### Site 3 — New Zealand (moonbar.co.nz)

Create a third Vercel project. Set `NEXT_PUBLIC_REGION=NZ`. Connect domain **moonbar.co.nz**.

---

## 6. Configure Sanity Webhook (ISR Revalidation)

In [sanity.io/manage](https://sanity.io/manage) → your project → **API** → **Webhooks**:

- **URL**: `https://moonbar.com.au/api/revalidate?secret=YOUR_SECRET`
- **Trigger on**: Create, Update, Delete
- **Dataset**: production

Repeat for the UK and NZ domains.

---

## 7. Populate Initial Content in Sanity Studio

Go to `http://localhost:3333` (or your Sanity Studio URL) and create:

1. **Site Settings** — one document per region (AU, UK, NZ)
2. **Homepages** — one per region
3. **Service Pages** — 9 pages, each available in all three regions
4. **Legal Pages** — Privacy, T&Cs, Cookies per region
5. **Blog Posts** — migrate from Joomla or create fresh

---

## 8. Update Phone Numbers

Edit `apps/web/lib/region.config.ts` — fill in the correct UK and NZ numbers from All Points North Publications Ltd once confirmed.

---

## Project Structure

```
moonbar/
├── apps/
│   ├── web/                    # Next.js 14 site
│   │   ├── app/                # Pages (App Router)
│   │   ├── components/         # UI components
│   │   │   ├── layout/         # Header, Footer, Nav
│   │   │   ├── readers/        # Reader feed & cards
│   │   │   ├── phone/          # Call boxes, sticky bar
│   │   │   └── seo/            # JSON-LD schema builders
│   │   └── lib/                # Sanity client, queries, region config
│   └── studio/                 # Sanity Studio + schemas
└── DEVELOPER_SETUP.md          # This file
```

---

## Key Files

| File | Purpose |
|------|---------|
| `apps/web/lib/region.config.ts` | All region-specific values (phone numbers, URLs, T&Cs) |
| `apps/web/app/api/readers/route.ts` | Allstar reader feed proxy — update with real API endpoint |
| `apps/web/components/seo/JsonLd.tsx` | All JSON-LD structured data schema builders |
| `apps/studio/sanity.config.ts` | Sanity Studio configuration |
| `apps/studio/schemas/` | All CMS content model schemas |

---

## Open Items Before Launch

- [ ] Confirm Allstar reader feed API endpoint + auth key
- [ ] Confirm Allstar live chat embed snippet per region  
- [ ] Confirm All Points North UK + NZ phone numbers
- [ ] Register moonbar.co.uk and moonbar.co.nz if not done
- [ ] Provide SVG logo files
- [ ] Provide hero and service imagery
