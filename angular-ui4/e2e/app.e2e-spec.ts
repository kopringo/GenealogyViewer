import { AngularUi4Page } from './app.po';

describe('angular-ui4 App', () => {
  let page: AngularUi4Page;

  beforeEach(() => {
    page = new AngularUi4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
