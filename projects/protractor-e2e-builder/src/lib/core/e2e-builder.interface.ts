import { E2ECommandBuilderInterface } from './e2e-command-builder.interface';

/**
 * This interface specifies the end-to-end builder contract to indicate what it does
 * @template Builder Concrete class
 */
export interface E2EBuilderInterface<Builder>
  extends E2ECommandBuilderInterface<Builder> {

  /**
   * This method navigates to specific relative URL
   * @param relativeUrl Relative URL (after base URL)
   * @return Builder concrete class
   * @example new E2EBuilder().navigateTo('home');
   */
  navigateTo(relativeUrl: string): Builder;
}
