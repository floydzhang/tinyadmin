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
import { LoginComponent } from './authentication/login/login.component';
import {LoginService} from './authentication/login/login.service';
import {JwtService} from './service/jwt.service';
import {LoggingService} from './service/logging.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,

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
    LoginService,
    JwtService,
    LoggingService,

    SelectivePreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
