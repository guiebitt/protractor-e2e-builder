import { E2EBuilder } from './e2e-builder';

/**
 * The main class to build a end-to-end test scenario
 * @example
 * E2E.builder();
 */
export class E2E {

  /**
   * @ignore
   */
  private readonly builder: E2EBuilder = new E2EBuilder();

  /**
   * @ignore
   */
  private constructor() { }

  /**
   * This method returns a end-to-end test scenario builder
   * @return End-to-end test scenario builder
   */
  static builder(): E2EBuilder {
    return new E2E().builder;
  }
}
