# HideOut Creatives website

A small static website for HideOut Creatives and its product lineup. It has no build step or runtime dependencies.

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
