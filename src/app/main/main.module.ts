import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule, MatSidenavModule } from '@angular/material';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSliderModule,
    MatSidenavModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
