import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

import { SharedModule } from './shared/shared.module';


@Component({
  selector: 'lazy-comp',
  template: 'lazy!  <shared-component></shared-component> <a routerLink="/">TO HOME</a>'
})
export class LazyComponent {}

@NgModule({
  imports: [
    RouterModule.forChild([
     {path: '', component: LazyComponent, pathMatch: 'full'},
    ]),

    SharedModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule {
  constructor() {}
}

export class SecondModule {}
