# Hybrid One — website (Next.js)

The approved Hybrid One site, built with **Next.js 16 (App Router) + TypeScript**, in **English and Arabic** (next-intl, full right-to-left support). The forms send submissions to **Formspree**, and Tailwind CSS is set up for new work.
The design, pages and animations are the same as the approved version.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server with hot reload |
| `npm run build` | Production build (run this before deploying to catch errors) |
| `npm start` | Serves the production build locally |
| `npm run typecheck` | TypeScript check |

## Project structure

```
hybrid-1/
├─ messages/
│  ├─ en.json                  All English text
│  └─ ar.json                  All Arabic text (same keys)
├─ public/img/                 All photos, logos and crew logos
├─ src/
│  ├─ proxy.ts                 Language detection and routing (next-intl)
│  ├─ i18n/                    next-intl config: routing.ts, request.ts
│  ├─ app/
│  │  ├─ [locale]/layout.tsx   <html lang/dir>, fonts, metadata per language
│  │  ├─ [locale]/page.tsx     Puts the site together: intro, nav, all pages, footer
│  │  ├─ site.css              The approved design stylesheet
│  │  ├─ rtl.css               Arabic / right-to-left adjustments
│  │  ├─ globals.css           Tailwind setup (see "Tailwind" below)
│  │  └─ icon.svg, sitemap.ts, robots.ts
│  ├─ components/
│  │  ├─ layout/               Intro, Wipe, Nav, MobileMenu, AmbassadorModal, CrewModal, Footer
│  │  ├─ pages/                One component per page (see below)
│  │  ├─ LangSwitch.tsx        The "EN / ع" switcher
│  │  ├─ tw/                   New Tailwind components go here
│  │  └─ SiteScript.tsx        Starts the site behaviour in the browser
│  └─ lib/
│     ├─ site-behaviour.ts     Page switching + wipe, intro, menu, reveals, galleries, FAQ, forms, modals
│     └─ sanity/               Sanity client, config and queries (for later)
└─ sanity/schemas/             Content models to paste into a Sanity Studio
```

### Pages

The site is one page with hash links, the same as the approved version:

| URL | Component |
| --- | --- |
| `/#home` (Arabic: `/ar#home`) | `pages/HomePage.tsx` (includes the hidden Ambassadors and Crews sections) |
| `/#concept` | `pages/ConceptPage.tsx` |
| `/#season` | `pages/SeasonPage.tsx` |
| `/#events` | `pages/EventsPage.tsx` |
| `/#push` | `pages/PushEventPage.tsx` — Race Simulation |
| `/#bahar` | `pages/BaharEventPage.tsx` — Hybrid One Bahar |
| `/#jeddah` | `pages/JeddahEventPage.tsx` — next event + early registration |
| `/#partners` | `pages/PartnersPage.tsx` |
| `/#faq` | `pages/FaqPage.tsx` |
| `/#join` | `pages/JoinPage.tsx` — waitlist |

All text is in `messages/en.json` and `messages/ar.json` (see **Languages** below). Keep the class names in the components as they are, because the design depends on them.

## Tailwind

Tailwind v4 is installed. Two settings keep the approved design unchanged:

1. Tailwind's CSS reset (Preflight) is **not** loaded.
2. Tailwind only scans `src/components/tw/`, so it never adds styles to the existing markup.

Build new components with Tailwind classes inside `src/components/tw/`.

## Connecting Sanity CMS later

The content is written directly in the page components for now. When you're ready for a CMS:

1. Create a Studio: `npm create sanity@latest` (in a separate folder).
2. Copy `sanity/schemas/*` into the Studio and add `schemaTypes` to `sanity.config.ts`.
3. Copy `.env.example` to `.env.local` and fill in `NEXT_PUBLIC_SANITY_PROJECT_ID` (and the dataset).
4. In a page component, fetch data with `sanityFetch(eventsQuery)` from `src/lib/sanity` and replace the hard-coded content.
5. In Sanity → API → CORS origins, add your Vercel domain.

## Languages (English + Arabic)

The site uses [next-intl](https://next-intl.dev).

- English is at `/` and Arabic is at `/ar`. Visitors whose browser is set to Arabic go to `/ar` automatically.
- The **EN / ع** switcher in the top bar and mobile menu changes language and keeps the visitor on the same page (for example `/#bahar` → `/ar#bahar`). The choice is remembered.
- Arabic pages use `<html lang="ar" dir="rtl">`. The layout mirrors automatically, and `src/app/rtl.css` holds the Arabic-specific fixes: the Cairo font for Arabic letters, no letter-spacing so the letters join, roomier line height for headlines, left-to-right phone and email fields, flipped arrows, and the mirrored Join photo.

### Editing text

Open `messages/en.json` or `messages/ar.json`. Each page has its own section (for example `"homePage"`, `"jeddahEventPage"`, `"faqPage"`), with the same keys in both files.

Some values contain tags like `<t0>…</t0>` or `<br></br>`. These mark styled parts of a headline (for example the outlined second line). Keep every tag from the English value in the Arabic value. You can move them around in the sentence, but don't delete or rename them.

The form messages ("Please fill in…", "Sending…") are under `"script"`.

## Forms (Formspree)

Both forms send their submissions to Formspree at **https://formspree.io/f/xgaappgp**. The page doesn't reload or leave the site. After a successful send, the form's confirmation message appears. If sending fails, the visitor sees an error and keeps what they typed.

| Form | Where | Fields sent |
| --- | --- | --- |
| Early registration | `/#jeddah` | Form · Full name · Mobile · email · Divisions · Language |
| Waitlist | `/#join` | Form · Full name · Email or WhatsApp · email (only if they typed an email) · City · Language |

- Each submission has its own email subject ("Hybrid One Jeddah — early registration" or "Hybrid One — waitlist"), so you can tell them apart in your inbox and in the Formspree dashboard.
- Divisions and cities are always sent in English, even when the form is filled in on the Arabic site. The **Language** field shows which version they used.
- Because the `email` field is included, you can press **Reply** on the notification email to answer the person directly.

**Where to see submissions:** log in at https://formspree.io → your form → **Submissions**. You can export them as CSV, which opens in Excel or Google Sheets. In the form's settings you can also connect Google Sheets, Slack and other services (some of these need a paid plan).

**Changing the endpoint:** the address is set in `src/components/SiteScript.tsx`. You can also override it without touching the code by setting `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local` or in Vercel's Environment Variables, then redeploying.

**Before launch:**
- Send one test from the live site. The first submission to a new Formspree form may ask you to confirm your email.
- In Formspree, under **Settings → Domains**, restrict the form to `hybrid-1.com` so other sites can't send to it.
- Check that your Formspree plan's monthly submission limit is enough for race-day sign-ups.

## Push to GitHub

1. Create an empty repository on https://github.com/new (for example `hybrid-1`). Don't add a README.
2. In a terminal, inside this folder:

```bash
git init
git add .
git commit -m "Hybrid One website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hybrid-1.git
git push -u origin main
```

`node_modules`, `.next` and `.env*.local` are already in `.gitignore`.

## Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New… → Project** and import the `hybrid-1` repository.
3. Vercel detects Next.js automatically. Leave the build settings as they are.
4. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` = `https://hybrid-1.com` (plus the Sanity variables later). The forms work without any extra settings.
5. Click **Deploy**. You'll get a `*.vercel.app` link in about a minute.
6. Every push to `main` redeploys automatically, and other branches get preview links.

### Connect the domain hybrid-1.com

1. In the Vercel project: **Settings → Domains → Add** → `hybrid-1.com` (and `www.hybrid-1.com`).
2. Vercel shows the DNS records to add. Add them at your domain registrar:
   - `A` record for `@` → the IP address Vercel gives you
   - `CNAME` record for `www` → the value Vercel gives you
3. HTTPS is set up automatically once the DNS records are working.
