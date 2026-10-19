# HideOut Creatives

HideOut Creatives is a React website built with Vite. The public pages, shared navigation, ratings, content listings, and private admin dashboard are React components. React Router keeps the existing public page URLs, including `.html` links.

## Run locally

1. Install Node.js 20.19 or newer.
2. Copy `.env.example` to `.env` if you need to override the API URL or public Google client ID.
3. Run `npm install` and `npm run dev` from this directory.
4. Open the local URL printed by Vite.

Run `npm run build` to create the production site in `dist/`, or `npm run preview` to view that build locally.

## Website admin

The dashboard is available at `/admin/`. It uses Google sign-in and the DIGITracker API at `https://digitracker-rq61.onrender.com`. Only `shadowhacktech@gmail.com` is allowlisted. Render and the Google Web OAuth client must include the live Vercel origin and exact `/admin/` redirect URI. See `../backend/README.md` for backend settings.

Admins can publish startups, innovations, events, blog posts, and apps. Images and related links use public HTTPS URLs; direct image uploads need a separate object storage service. Anonymous ratings from the Apps, Startups, and Innovation pages are stored in MongoDB and summarized in the dashboard. Rating records expire after one year.

The dashboard reports aggregate page views and APK download clicks; these are usage counts, not full uptime or Core Web Vitals monitoring. The privacy and terms pages are drafts and need review before public launch.

## Publish the Android APK

Android APKs are distributed as GitHub Release assets, not Vercel build files. `DIGITracker-latest.apk` is hosted in the latest `HideOut-creatives` release, and `Ziba-latest.apk` is hosted in the latest `Ziba-enterprises` release. The website redirects each `/downloads/<filename>` URL to its matching release asset. Keep these exact names for future versions and upload the APKs to their respective releases.

## Deploy on Vercel

Import this repository with the Vite framework preset, build command `npm run build`, and output directory `dist`. These settings are also present in `vercel.json`. Vercel serves the site over HTTPS, and the rewrite keeps existing `.html` paths working in the React app.
