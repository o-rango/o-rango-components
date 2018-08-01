import { OAlertComponent } from './o-alert';
import { TestWindow } from '@stencil/core/testing';

describe('o-alert component', () => {
  it('should build', () => {
    expect(new OAlertComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLOAlertElement
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [OAlertComponent],
        html: '<o-alert>Hello, World! I\'m Peter</o-alert>'
      });
    });


    it('check if text renders', async () => {
      element.line = true;
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    });

  });
});
