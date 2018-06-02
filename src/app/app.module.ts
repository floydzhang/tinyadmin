import { AppSettings } from './app.settings';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// custom module


// component
import { AppComponent } from './app.component';
import { MainRoutingModule } from './main/main-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,


    // material module
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

    // thire module
    FlexLayoutModule,

    // custom modue
    AppRoutingModule

  ],
  providers: [
    AppSettings,

    SelectivePreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
