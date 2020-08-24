import { defer } from 'rxjs';
import { E2ECommandBuilderInterface } from '../../e2e-command-builder.interface';
import { E2ECommandComponent } from '../../e2e-command-component';

/**
 * KendoGrid component command
 */
export class E2EKendoGrid
  extends E2ECommandComponent<E2EKendoGrid>
{
  /**
   * This method builds a component
   * @param selector Selector value
   * @param type Id or css
   */
  static get(selector: string, type: 'id' | 'css' = 'id'): E2EKendoGrid {
    return new E2EKendoGrid(selector, type);
  }

  /**
   * This method adds a new commands group
   * @param command Any class that implements `E2ECommandBuilderInterface`
   * @template Command Command concrete class
   */
  and<Command>(command: E2ECommandBuilderInterface<Command>): E2EKendoGrid {
    return this.addCommand(this, defer(() => command.run()));
  }
}
