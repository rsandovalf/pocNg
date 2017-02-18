import { O2cFirePage } from './app.po';

describe('o2c-fire App', () => {
  let page: O2cFirePage;

  beforeEach(() => {
    page = new O2cFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
