# JoruriCode Landing Page

React + Vite landing page for JoruriCode with Firebase-ready configuration.

## Features

- Bangla and English language toggle
- Noto Sans Bengali typography for Bangla mode
- Scroll fade/reveal effects
- Mobile app advertisement section
- Get in Touch form ready for Firebase Realtime Database

## Run in VS Code

1. Open this folder in VS Code.
2. Run:

```bash
npm install
npm run dev
```

3. Open the local URL printed in the terminal.

## Firebase

Copy `.env.example` to `.env` and add your Firebase project keys when the app or admin panel is ready.

```bash
cp .env.example .env
```

The Get in Touch form stores messages in Firebase Realtime Database under `Get_in_touch`.

## Build

```bash
npm run build
```
