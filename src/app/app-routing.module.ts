import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

/**
 * App router
 */
const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'}
    ,
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    }
    ,
    {
        path: 'app',
        loadChildren: './main/main.module#MainModule'
    },
    {
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadingStrategy, useHash: true})
    ],
    exports: [RouterModule]

})

export class AppRoutingModule {
}
