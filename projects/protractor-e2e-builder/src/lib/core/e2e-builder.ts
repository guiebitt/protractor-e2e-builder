import { browser, protractor, ProtractorExpectedConditions } from 'protractor';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export class E2E {

  private builder: E2EBuilder;

  private constructor() {
    this.builder = new E2EBuilder();
  }

  public static builder(): E2EBuilder {
    return new E2E().builder;
  }
}

export class E2EBuilder {

  private commands: Observable<void> = of(null);
  private ec: ProtractorExpectedConditions = protractor.ExpectedConditions;

  public navigateTo(relativeUrl: string): E2EBuilder {
    return this.addCommand(this.navigateToCmd(relativeUrl));
  }

  public run(): Promise<void> {
    return this.commands.toPromise();
  }

  private addCommand(cmd: Promise<void>): E2EBuilder {
    const command = new Observable<void>(observ => {
      cmd.finally(() => {
        observ.next();
        observ.complete();
      });
    });
    this.commands = this.commands.pipe(switchMap(() => command));
    return this;
  }

  private async navigateToCmd(relativeUrl: string): Promise<void> {
    const url = `${browser.baseUrl}${relativeUrl}`;
    await browser.get(url);
    expect(await browser.getCurrentUrl()).toBe(url);
  }
}
