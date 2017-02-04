import { NgModule, Component } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'home-view',
  template: 'home! <shared-component></shared-component>'
})
export class HomeView {}


@NgModule({
  declarations: [
    AppComponent,
    HomeView
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'lazy', loadChildren: './lazy.module#LazyModule'},
      {path: '', component: HomeView}
    ]),

    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
