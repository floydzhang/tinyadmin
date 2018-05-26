import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRouterModule } from 'src/app/pages/pages.router.module';
import { MatSidenavModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRouterModule,

    //
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    PagesComponent,
    SidenavComponent
  ]
})
export class PagesModule { }
