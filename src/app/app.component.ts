import { Component, VERSION, ɵmarkDirty, Type } from '@angular/core';
import { Δ } from './reactive.decorator';

@Component({
  selector: 'my-app',
  template: `
    <app-child></app-child>
    <app-child></app-child>
  `,
})
export class AppComponent {

}
