import { WorldbuilderDBPage } from './app.po';

describe('worldbuilder-db App', function() {
  let page: WorldbuilderDBPage;

  beforeEach(() => {
    page = new WorldbuilderDBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
