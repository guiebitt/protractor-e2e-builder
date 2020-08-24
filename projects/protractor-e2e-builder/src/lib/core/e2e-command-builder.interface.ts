/**
 * This interface specifies the end-to-end command contract to indicate what it does
 * @template CommandBuilder Concrete class
 */
export interface E2ECommandBuilderInterface<CommandBuilder> {

  /**
   * This method adds a new commands group
   * @param command Any class that implements `E2ECommandBuilderInterface`
   * @return Command builder concrete class
   * @template Command Command concrete class
   */
  and<Command>(command: E2ECommandBuilderInterface<Command>): CommandBuilder;

  /**
   * This method runs all commands added
   */
  run(): Promise<void>;
}
