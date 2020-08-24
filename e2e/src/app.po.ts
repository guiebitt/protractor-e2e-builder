import { E2EComponent } from './../../projects/protractor-e2e-builder/src/lib/core/command/basic/e2e-component';

export class AppPage {
  welcome = E2EComponent.get('welcome');
  title = E2EComponent.get('title');
}
