import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from 'src/app/pages/pages.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PagesRouterModule {
}
