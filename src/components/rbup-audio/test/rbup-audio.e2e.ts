import { newE2EPage } from '@stencil/core/testing';

describe('rbup-audio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rbup-audio></rbup-audio>');

    const element = await page.find('rbup-audio');
    expect(element).toHaveClass('hydrated');
  });
});
