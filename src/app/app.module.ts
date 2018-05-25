import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { MainRoutingModule } from './main/main-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SelectivePreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
