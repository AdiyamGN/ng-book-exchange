import { NgBookExchangePage } from './app.po';

describe('ng-book-exchange App', () => {
  let page: NgBookExchangePage;

  beforeEach(() => {
    page = new NgBookExchangePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
