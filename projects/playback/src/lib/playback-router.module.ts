import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {routes} from './playback-router.routes';


@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class PlaybackRouterModule { }
