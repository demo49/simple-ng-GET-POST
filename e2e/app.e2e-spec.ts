import { UdemyTestPage } from './app.po';

describe('udemy-test App', () => {
  let page: UdemyTestPage;

  beforeEach(() => {
    page = new UdemyTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
