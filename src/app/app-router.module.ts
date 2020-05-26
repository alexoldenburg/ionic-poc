import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {routes} from './app-router.routes';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot( routes, {useHash: true, enableTracing: true})
    ],
    exports: [RouterModule]
})
export class AppRouterModule { }
