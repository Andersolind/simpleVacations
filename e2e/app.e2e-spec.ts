import { SimpleVacationsPage } from './app.po';

describe('simple-vacations App', function() {
  let page: SimpleVacationsPage;

  beforeEach(() => {
    page = new SimpleVacationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
