import {takeScreenshot, toExist, press, reload} from 'react-native-owl';

const setDelay = delay => new Promise(resolve => setTimeout(resolve, delay));

describe('App.tsx', () => {
  beforeAll(reload);

  it('does runAfterBlock Exists', async () => {
    await setDelay(10000);
    console.log('runAfterBlock start');
    await toExist('runAfterBlock');
    console.log('runAfterBlock exists');
    await press('runAfterBlock');
    console.log('runAfterBlock pressed');
    const screen = await takeScreenshot('afterButtonPress');

    expect(screen).toMatchBaseline();
  }, 15000);

  it('does checkJSThreadBlock Exists', async () => {
    await toExist('checkJSThreadBlock');
    await press('runAfterBlock');
  });

  it('does checkJSThreadAsync Exists', async () => {
    await toExist('checkJSThreadAsync');
    await press('runAfterBlock');
  });
});
