import { newSpecPage } from '@stencil/core/testing';
import { RbupAudio } from '../rbup-audio';

describe('rbup-audio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RbupAudio],
      html: `<rbup-audio></rbup-audio>`,
    });
    expect(page.root).toEqualHtml(`
      <rbup-audio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rbup-audio>
    `);
  });
});
