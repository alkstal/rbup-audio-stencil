import { newSpecPage } from '@stencil/core/testing';
import { AudioControls } from '../audio-controls';

describe('audio-controls', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AudioControls],
      html: `<audio-controls></audio-controls>`,
    });
    expect(page.root).toEqualHtml(`
      <audio-controls>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </audio-controls>
    `);
  });
});
