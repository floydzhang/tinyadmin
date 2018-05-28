import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { MainRoutingModule } from './main/main-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [SelectivePreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
