import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { SharedComponent } from './shared.component';


@NgModule({
  declarations: [
    SharedComponent
  ],
  exports: [
    SharedComponent
  ],
  imports: [
    //
  ]
})
export class SharedModule {}
