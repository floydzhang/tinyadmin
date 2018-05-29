// module start
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouterModule } from 'src/app/pages/pages.router.module';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatChipsModule,
  MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// module end

// components start
import { PagesComponent } from './pages.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoCardsComponent } from './dashboard/info-cards/info-cards.component';


// variable
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    PagesRouterModule,


    //
    FlexLayoutModule,
    PerfectScrollbarModule,
    //
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatCardModule,
    NgxChartsModule
  ],
  declarations: [
    PagesComponent,
    SidenavComponent,
    VerticalMenuComponent,
    DashboardComponent,
    InfoCardsComponent,
    // pages

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PagesModule { }
