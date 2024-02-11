# Next.js 14 + TypeScript + Tailwind CSS + Ionic Framework + Capacitor Starter

This project is a state-of-the-art starter template designed for building scalable, cross-platform applications with Next.js 14, TypeScript, Tailwind CSS, Ionic Framework, and Capacitor. It enables developers to efficiently create apps that run on iOS, Android, and the web with a single codebase.

## Inspiration

This project was inspired by [Max Lynch's Next.js + Tailwind CSS + Ionic Framework + Capacitor Mobile Starter](https://github.com/mlynch/nextjs-tailwind-ionic-capacitor-starter). The original project provided a conceptual starting point for integrating these technologies into a cohesive development stack for building mobile and web applications. We have adapted and expanded upon this foundation to leverage the latest features of Next.js 14 and TypeScript, along with incorporating best practices and additional configurations to enhance the developer experience and application performance.

## Features

- **Next.js 14**: Leverages the latest Next.js features for optimized React applications.
- **TypeScript**: Integrates TypeScript for type safety and improved developer experience.
- **Tailwind CSS**: Uses Tailwind CSS for rapid UI development with utility-first styling.
- **Ionic Framework**: Employs Ionic Framework for high-quality, cross-platform UI components.
- **Capacitor**: Utilizes Capacitor to bridge web apps with native mobile functionality, providing full access to native SDKs on iOS and Android.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Android Studio or Xcode (for mobile app development)

### Setup

1. **Clone the repository**:
    ```bash
    git clone <repository-url> <project-directory>
    ```

2. **Install dependencies**:
    ```bash
    cd <project-directory>
    npm install
    ```

3. **Add platforms**:
    To add iOS and Android platforms to your project:
    ```bash
    npx cap add ios
    npx cap add android
    ```
    This step requires Xcode for iOS and Android Studio for Android development.

4. **Install Android Studio** (for Android development):
    To run and test your app on an Android emulator, [download and install Android Studio](https://developer.android.com/studio). During installation, ensure you include the Android SDK and configure it as per the installation instructions.

5. **Install Xcode** (for iOS development on Mac):
    To run and test your app on an iOS simulator, download and install Xcode from the Mac App Store. After installation, open Xcode to install additional required components when prompted. Xcode includes the iOS Simulator where you can run your iOS apps.

### Development

Start the development server with:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to see the app.

## Capacitor Configuration

The project integrates Capacitor for running on iOS and Android, configured in `capacitor.config.ts`:

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nextjs-typescript-tailwind-ionic-starter',
  cordova: {},
  loggingBehavior: "debug",
  webDir: "out",
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  },
  server: {
    androidScheme: 'https',
    hostname: 'localhost:3000',
  },
  android: {
     loggingBehavior: "debug",
     webContentsDebuggingEnabled: true,
  }
};

export default config;
```

### Building and Running on Devices

To compile the application and prepare it for iOS and Android:

```bash
npm run build
npx cap sync
npx cap open ios
npx cap open android
```

### Live Reload

For live reload on devices, ensure your development server is accessible as configured in `capacitor.config.ts`. Adjust the `hostname` to match your development environment if necessary.

## Project Structure

- `Card.tsx`, `Notifications.tsx`, `Settings.tsx`, `Tabs.tsx`: Showcase Ionic components.
- `AppShell.tsx`: Manages app layout and navigation.
- `[page].tsx`: Implements dynamic routing with Next.js.
- `capacitor.config.ts`: Contains Capacitor configuration for native platforms.
- `next.config.mjs`: Configures Next.js, including TypeScript and Tailwind CSS integration.

## Caveats

- The project setup excludes Server Side Rendering (SSR) to comply with Capacitor's requirements for mobile platforms.
- Adapted Next.js routing to accommodate Ionic's navigation system for a native app experience.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Ionic Framework Docs](https://ionicframework.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)

## Contributing

Contributions are welcome. Please review our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
