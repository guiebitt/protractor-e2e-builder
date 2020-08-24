import { by } from 'protractor';
import { defer } from 'rxjs';
import { E2ECommandBuilderInterface } from '../../e2e-command-builder.interface';
import { E2ECommandComponent } from '../../e2e-command-component';

/**
 * PoPage component command
 */
export class E2EPoPage
  extends E2ECommandComponent<E2EPoPage>
{
  /**
   * This method builds a component
   * @param selector Selector value
   * @param type Id or css
   */
  static get(selector: string, type: 'id' | 'css' = 'id'): E2EPoPage {
    return new E2EPoPage(selector, type);
  }

  /**
   * This method adds a new commands group
   * @param command Any class that implements `E2ECommandBuilderInterface`
   * @template Command Command concrete class
   */
  and<Command>(command: E2ECommandBuilderInterface<Command>): E2EPoPage {
    return this.addCommand(this, defer(() => command.run()));
  }

  shouldTitleBe(value: string): E2EPoPage {
    return this.addCommand(this, defer(() => this.shouldTitleBeCmd(value)));
  }

  shouldFilterBePresent(value: boolean): E2EPoPage {
    return this.addCommand(this, defer(() => this.shouldFilterBePresentCmd(value)));
  }

  shouldAdvancedFilterBePresent(value: boolean): E2EPoPage {
    return this.addCommand(this, defer(() => this.shouldAdvancedFilterBePresentCmd(value)));
  }

  private async shouldTitleBeCmd(value: string): Promise<void> {
    expect(await this.component.element(by.css('.po-page-header-title')).getText()).toBe(value);
  }

  private async shouldFilterBePresentCmd(value: boolean): Promise<void> {
    expect(await this.component.element(
      by.css('.po-page-filter-content input')
    ).isPresent()).toBe(value, `Filter should be present: ${value}`);
  }

  private async shouldAdvancedFilterBePresentCmd(value: boolean): Promise<void> {
    expect(await this.component.element(
      by.css('.po-page-list-filter-search-link')
    ).isPresent()).toBe(value, `Advanced filter should be present: ${value}`);
  }
}
