import { OAlertComponent } from './o-button';
import { TestWindow } from '@stencil/core/dist/testing';

describe('o-button component', () => {
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
        html: '<o-button>Hello, World! I\'m Peter</o-button>'
      });
    });


    it('check if text renders', async () => {
      element.line = true;
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    });

  });
});
