# HideOut Creatives website

A small static website for HideOut Creatives and its product lineup. It has no build step or runtime dependencies.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Add the Android release

Copy the signed release APK into `downloads/` using this stable filename:

```text
downloads/DIGITracker-latest.apk
```

The product page enables its download button once that file is present. To offer APK update notices inside the app, publish a `version.json` at the site's root with the release's actual Android version code and the direct APK URL:

```json
{
  "latest": 7,
  "url": "https://YOUR-SITE/downloads/DIGITracker-latest.apk"
}
```

Set `EXPO_PUBLIC_ANDROID_VERSION_URL` in the EAS production environment to `https://YOUR-SITE/version.json` and build the app again so installed APKs know where to check.

## Hosting

Deploy this folder as the root of a static site. Keep this company site in its own deployment/repository; the existing GitHub repository is intended to remain backend-only. Use HTTPS and preserve the APK path above for future releases.
