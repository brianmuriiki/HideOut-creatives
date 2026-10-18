# HideOut Creatives website

A small static website for HideOut Creatives and its product lineup. It has no build step or runtime dependencies.

## Pages

- `index.html` — Home
- `about.html`, `contacts.html`, `careers.html` — Company information
- `apps.html` and `docs/digitracker.html` — Product catalogue and DIGITracker guide
- `services.html`, `startups.html`, `innovation.html` — Studio work and initiatives
- `blog.html`, `events.html`, `communities.html`, `ideas.html` — Editorial and community pages
- `privacy.html` and `terms.html` — Legal pages; both are marked as drafts and need review before public launch
- `admin/` — Private Google sign-in dashboard for aggregated site activity and published site content (requires backend deployment configuration)

The email and phone shown on the Contacts page are the public contact details provided by the company owner.

## Website admin

The admin dashboard is served at `/admin/`. It calls the DIGITracker backend at `https://digitracker-rq61.onrender.com` for authenticated content management and anonymous aggregate analytics. Access is restricted to `shadowhacktech@gmail.com`. To activate it, set `ADMIN_EMAILS=shadowhacktech@gmail.com`, add the exact Vercel `/admin/` redirect URI and site origin in the Render API environment, and add that redirect URI to the Google Web OAuth client. See `../backend/README.md` for the complete settings. The dashboard accepts an HTTPS image URL; direct file uploads need a separate object storage service.

Ratings submitted from the Apps, Startups, and Innovation pages are stored anonymously in MongoDB. Their average score and optional comments appear in the admin dashboard; records expire after one year.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Publish the Android APK

The release APK is larger than Vercel's 100 MB Hobby static-file limit, so do not commit it to this repository. Upload it as a GitHub Release asset named `DIGITracker-latest.apk` instead. Individual GitHub Release assets can be up to 2 GiB.

For this build, create a GitHub Release with tag `v1.0.1` and upload `downloads/DIGITracker-latest.apk`. The Vercel route `/downloads/DIGITracker-latest.apk` redirects to the matching asset on the latest GitHub Release. Keep using that exact asset filename for future releases.

The APK currently in `downloads/` is ignored by Git so it is available for upload without becoming part of the website repository.

## Hosting

Import this repository into Vercel as a static project with Framework Preset `Other`, no build command, and output directory `.`. Keep this company site in its own repository; DIGITracker's API repository remains separate. Vercel serves the site over HTTPS.
