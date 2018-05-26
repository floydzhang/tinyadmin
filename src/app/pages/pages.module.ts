import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRouterModule } from 'src/app/pages/pages.router.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRouterModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
