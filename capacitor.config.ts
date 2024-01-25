import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.deel.task',
  appName: 'deel-task',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    url: 'http://192.168.1.14:3000/',
    cleartext: true
  },
  ios: {
    contentInset: 'always'
  }
};

export default config;
