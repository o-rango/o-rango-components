import { OInputComponent } from './o-input';
import { TestWindow } from '@stencil/core/dist/testing';

describe('o-input component', () => {
  it('should build', () => {
    expect(new OInputComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: OInputComponent
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [OInputComponent],
        html: '<o-input>Summit</o-input>'
      });
    });


    it('check if text renders', async () => {
      await testWindow.flush();
    });

  });
});
