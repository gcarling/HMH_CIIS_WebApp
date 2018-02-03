import { AirQPage } from './app.po';

describe('air-q App', function() {
  let page: AirQPage;

  beforeEach(() => {
    page = new AirQPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
