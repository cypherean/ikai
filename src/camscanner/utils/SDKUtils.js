import ScanbotSDK from 'react-native-scanbot-sdk/src';

export class SDKUtils {
  /*
   * TODO Add the Scanbot SDK license key here.
   * Please note: The Scanbot SDK will run without a license key for one minute per session!
   * After the trial period is over all Scanbot SDK functions as well as the UI components will stop working
   * or may be terminated. You can get an unrestricted "no-strings-attached" 30 day trial license key for free.
   * Please submit the trial license form (https://scanbot.io/en/sdk/demo/trial) on our website by using
   * the app identifier "io.scanbot.example.sdk.reactnative" of this example app.
   */

  static async checkLicense() {
    const info = await ScanbotSDK.getLicenseInfo();
    if (info.isLicenseValid) {
      // OK - we have a trial session, a valid trial license or valid production license.
      return true;
    }
    // @ts-ignore
    // eslint-disable-next-line no-alert
    alert('Scanbot SDK trial period or license has expired!', 500);
    return false;
  }
}
