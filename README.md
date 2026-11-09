# ANSI Z1.4 Calculator – Android app (Capacitor)

Your React calculator (`src/App.tsx`, unchanged) wrapped as a native Android app.

## Option A – Build on your PC (needs Node 18+, JDK 17, Android SDK / Android Studio)
```bash
npm install
npx vite build
npx cap add android      # first time only
npx cap sync android
cd android && ./gradlew assembleDebug        # Windows: gradlew.bat assembleDebug
```
APK: `android/app/build/outputs/apk/debug/app-debug.apk`
Or run `npx cap open android` and press Run in Android Studio.

## Option B – No setup: build in the cloud
Push this folder to a GitHub repo → Actions tab → "Build Android APK" → Run workflow →
download the `ansi-z14-debug-apk` artifact and install on your phone.

## Test in browser first
`npm install && npm run dev`

## Play Store release
Change `appId` in `capacitor.config.json` if you want, then in Android Studio use
Build → Generate Signed Bundle / APK (AAB).
