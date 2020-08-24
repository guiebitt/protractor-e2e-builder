import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { E2ECommandBuilderInterface } from './e2e-command-builder.interface';

/**
 * Abstract class that specified a end-to-end test command class
 * @template Builder Command builder concrete class
 */
export abstract class E2ECommand<Builder>
  implements E2ECommandBuilderInterface<Builder> {

  /**
   * Observable with commands sequence
   */
  protected commands: Observable<void> = of(null);

  /**
   * Abstract method to specify the `and` behavior
   * @param command Any class that implements `E2ECommandBuilderInterface`
   */
  abstract and<Command>(command: E2ECommandBuilderInterface<Command>): Builder;

  /**
   * This method runs all commands added
   */
  run(): Promise<void> {
    return this.commands.toPromise();
  }

  /**
   * This method adds one command instruction in commands sequence
   * @param builder Command builder concrete class
   * @param cmd Observable with one command instruction
   * @return Command builder concrete class
   * @template Builder Command builder concrete class
   */
  protected addCommand(builder: Builder, cmd: Observable<void>): Builder {
    this.commands = this.commands.pipe(
      switchMap(() => cmd)
    );
    return builder;
  }
}
