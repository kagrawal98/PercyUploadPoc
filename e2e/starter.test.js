import {expect, device, by, element} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should tap on a button', async () => {
    // await element(by.id('runAfterBlock')).tap();
    await element(by.id('rootView')).takeScreenshot('homescreen');
  });
});
