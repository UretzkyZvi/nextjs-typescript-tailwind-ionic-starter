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
