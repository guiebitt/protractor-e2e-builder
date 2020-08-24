import { defer } from 'rxjs';
import { E2ECommandBuilderInterface } from '../../e2e-command-builder.interface';
import { E2ECommandComponent } from '../../e2e-command-component';
import { E2EComponentInterface } from './e2e-component.interface';

/**
 * ElementFinder component command
 */
export class E2EComponent
  extends E2ECommandComponent<E2EComponent>
  implements E2EComponentInterface<E2EComponent>
{
  /**
   * This method builds a component
   * @param selector Selector value
   * @param type Id or css
   */
  static get(selector: string, type: 'id' | 'css' = 'id'): E2EComponent {
    return new E2EComponent(selector, type);
  }

  /**
   * This method adds a new commands group
   * @param command Any class that implements `E2ECommandBuilderInterface`
   * @template Command Command concrete class
   */
  and<Command>(command: E2ECommandBuilderInterface<Command>): E2EComponent {
    return this.addCommand(this, defer(() => command.run()));
  }

  click(): E2EComponent {
    return this.addCommand(this, defer(() => this.clickCmd()));
  }

  shouldTextBe(value: string): E2EComponent {
    return this.addCommand(this, defer(() => this.shouldTextBeCmd(value)));
  }

  /**
   * @ignore
   */
  private async clickCmd(): Promise<void> {
    await this.component.click();
  }

  /**
   * @ignore
   */
  private async shouldTextBeCmd(value: string): Promise<void> {
    expect(await this.component.getText()).toBe(value);
  }
}
