import { RocketChatv2Page } from './app.po';

describe('rocket-chatv2 App', () => {
  let page: RocketChatv2Page;

  beforeEach(() => {
    page = new RocketChatv2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
