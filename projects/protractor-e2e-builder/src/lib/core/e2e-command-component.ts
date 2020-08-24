import { by, element, ElementFinder } from 'protractor';
import { E2ECommand } from './e2e-command';

/**
 * Abstract class that specified a end-to-end test command component class
 * @template Builder Command builder concrete class
 */
export abstract class E2ECommandComponent<Builder>
  extends E2ECommand<Builder>
{
  /**
   * @ignore
   */
  protected readonly component: ElementFinder;

  /**
   * @ignore
   */
  protected constructor(selector: string, type: 'id' | 'css' = 'id') {
    super();
    if (type === 'id') {
      this.component = element(by.id(selector));
    } else {
      this.component = element(by.css(selector));
    }
  }
}
