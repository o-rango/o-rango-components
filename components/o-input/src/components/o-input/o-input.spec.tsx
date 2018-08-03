import { OButtonComponent } from './o-input';
import { TestWindow } from '@stencil/core/dist/testing';

describe('o-input component', () => {
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
        html: '<o-input>Summit</o-input>'
      });
    });


    it('check if text renders', async () => {
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Summit');
    });

  });
});
