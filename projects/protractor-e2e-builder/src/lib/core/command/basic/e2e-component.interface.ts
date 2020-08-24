import { E2ECommandBuilderInterface } from '../../e2e-command-builder.interface';

/**
 * This interface specifies the ElementFinder component command contract
 */
export interface E2EComponentInterface<E2EComponent>
  extends E2ECommandBuilderInterface<E2EComponent> {

  /**
   * This method dispatch click event
   */
  click(): E2EComponent;

  /**
   * This method verifies the component text value
   * @param value Expected value
   */
  shouldTextBe(value: string): E2EComponent;
}
