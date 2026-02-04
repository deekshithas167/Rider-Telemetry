import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vijay.rideassist',
  appName: 'RideAssistPro',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'http', // allows http:// for Flask
    cleartext: true
  }
};

export default config;
