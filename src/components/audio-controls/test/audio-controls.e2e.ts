import { newE2EPage } from '@stencil/core/testing';

describe('audio-controls', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<audio-controls></audio-controls>');

    const element = await page.find('audio-controls');
    expect(element).toHaveClass('hydrated');
  });
});
