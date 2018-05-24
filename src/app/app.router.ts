import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

/**
 * App router
 */
const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login'},
    {path: 'app'},
    {path: '**'}
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadingStrategy, useHash: true})
    ],
    exports: [RouterModule]

})

export class AppRouter {
}
