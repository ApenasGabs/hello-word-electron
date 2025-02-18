
# React + TypeScript + Vite + Electron

This template provides a minimal setup to get React working in Vite with TypeScript and includes the necessary configuration to work both on the web (hosted on Vercel) and as a desktop application using Electron.

## Project Structure

```markdown
/hello-world-electron
│
├── /src
│   ├── /components (your React components)
│   ├── /pages (React pages, including the common landing page)
│   └── App.tsx
├── /electron
│   ├── main.ts (Electron's main process)
│   └── preload.ts (Electron's preload script)
└── package.json

```

## Frontend: React + Vite

The **frontend** of the application is developed using **React** and **Vite**. This part of the application will be hosted on **Vercel** and will include the landing page and basic UI for all platforms.

### Deploying Frontend to Vercel

1. Create your Vite React app with TypeScript.
2. Configure the proxy in `vite.config.ts` for local Electron API interaction if needed.
3. Deploy the frontend to **Vercel** with the following command:

   ```bash
   vercel --prod
   ```

The frontend will be available on the web and will serve as the shared landing page for all platforms (Linux, Windows, macOS).

### Vite Configuration Example

```ts
// vite.config.ts

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/electron-api': 'http://localhost:3000',  // Example of local API for Electron interactions
    },
  },
});
```

## Electron: Desktop Application

The **Electron** part of the application runs locally on the user's machine. This version will include more advanced features, such as interacting with the system's file system or performing native tasks.

### Running Electron Locally

1. Ensure you have `electron` and `electron-builder` installed as dev dependencies.
2. Run the following command to start the application locally (it will package and run the Electron app):

   ```bash
   npm run dev
   ```

### Electron Configuration

- **Main Process (`main.ts`)**: This file handles Electron's main process and initializes the app.
- **Preload Script (`preload.ts`)**: This script allows safe interaction between the renderer process (React) and Electron's main process.

### Example `package.json` Scripts

```json
{
  "scripts": {
    "dev": "concurrently \"vite\" \"cross-env VITE_DEV_SERVER_URL=http://localhost:5173 electron .\"",
    "build": "vite build && electron-builder",
    "start": "electron ."
  }
}
```

### Package Configuration for Electron

In `package.json`, ensure the **main entry** points to the correct Electron entry file, typically something like this:

```json
{
  "main": "electron/main.js",
  "build": {
    "appId": "com.example.myapp",
    "productName": "My Electron App",
    "files": [
      "dist/**",
      "electron/**"
    ]
  }
}
```

### Building the Electron App

To build the Electron app for different platforms (Linux, macOS, and Windows), use:

```bash
npm run build
```

This will package the Electron app for the specified platforms.

## Important Notes

- **Vercel** is used only for hosting the frontend (React app) and cannot run the Electron app itself.
- **Electron** should run locally on the user's machine, where it handles all system-level tasks.
- The landing page and basic UI will be the same for all platforms and will be shared between the web (Vercel) and desktop (Electron) versions.

## Conclusion

This setup allows you to run your React app on the web (Vercel) and on the desktop (Electron). The landing page is common for all platforms, while more advanced features are handled locally by Electron when the app is installed on the user's machine.
