import { OButtonComponent } from './o-button';
import { TestWindow } from '@stencil/core/dist/testing';

describe('o-button component', () => {
  it('should build', () => {
    expect(new OButtonComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: OButtonComponent
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [OButtonComponent],
        html: '<o-button>Summit</o-button>'
      });
    });


    it('check if text renders', async () => {
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Summit');
    });

  });
});
