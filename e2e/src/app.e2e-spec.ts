import { browser, logging } from 'protractor';
import { E2E } from './../../projects/protractor-e2e-builder/src/lib/core/e2e';
import { AppPage } from './app.po';

describe('workspace-project App', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    E2E
      .builder()
      .navigateTo('')
      .and(
        page
          .welcome
          .shouldTextBe('Welcome')
      )
      .and(
        page
          .title
          .shouldTextBe('protractor-e2e-builder-sample app is running!')
      )
      .run();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE
    } as logging.Entry));
  });
});
