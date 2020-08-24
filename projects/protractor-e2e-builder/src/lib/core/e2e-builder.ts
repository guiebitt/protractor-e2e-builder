import { browser } from 'protractor';
import { defer } from 'rxjs';
import { E2EBuilderInterface } from './e2e-builder.interface';
import { E2ECommand } from './e2e-command';
import { E2ECommandBuilderInterface } from './e2e-command-builder.interface';

/**
 * End-to-end test scenario builder
 * This class contains some methods to start the test scenario
 * @extends E2ECommand Abstract command class
 * @example
 * new E2EBuilder().navigateTo('home')
 */
export class E2EBuilder
  extends E2ECommand<E2EBuilder>
  implements E2EBuilderInterface<E2EBuilder>
{

  /**
   * This method adds the navigate method to specific relative URL
   * @param relativeUrl Relative URL (after base URL)
   * @example new E2EBuilder().navigateTo('home');
   */
  navigateTo(relativeUrl: string, shouldRedirectTo?: string): E2EBuilder {
    return this.addCommand(this, defer(
      () => this.navigateToCmd(relativeUrl, shouldRedirectTo)
    ));
  }

  /**
   * This method adds a new commands group
   * @param command Any class that implements `E2ECommandBuilderInterface`
   */
  and<Command>(command: E2ECommandBuilderInterface<Command>): E2EBuilder {
    return this.addCommand(this, defer(
      () => command.run()
    ));
  }

  /**
   * @ignore
   */
  private async navigateToCmd(relativeUrl: string, shouldRedirectTo?: string): Promise<void> {
    const url = `${browser.baseUrl}${relativeUrl}`;
    await browser.get(url);
    expect(await browser.getCurrentUrl()).toBe(shouldRedirectTo ? `${browser.baseUrl}${shouldRedirectTo}` : url);
  }
}
