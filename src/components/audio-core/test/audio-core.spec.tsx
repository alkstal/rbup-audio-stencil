import { newSpecPage } from '@stencil/core/testing';
import { AudioCore } from '../audio-core';

describe('audio-core', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AudioCore],
      html: `<audio-core></audio-core>`,
    });
    expect(page.root).toEqualHtml(`
      <audio-core>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </audio-core>
    `);
  });
});
