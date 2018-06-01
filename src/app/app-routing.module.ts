import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { NotfoundComponent } from './notfound/notfound.component';

/**
 * App router
 */
const appRoutes: Routes = [
    // {path: '', redirectTo: '/pages', pathMatch: 'full'},
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'app',
        loadChildren: './main/main.module#MainModule'
    },
    {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
    },
    {path: '**', component: NotfoundComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadingStrategy, useHash: true})
    ],
    exports: [RouterModule]

})

export class AppRoutingModule {
}
