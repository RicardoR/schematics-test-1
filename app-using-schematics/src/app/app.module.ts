import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponentNoSubsComponent } from './my-component-no-subs/my-component-no-subs.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponentNoSubsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
