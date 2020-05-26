import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaybackComponent } from './playback.component';
import {PlaybackRouterModule} from './playback-router.module';



@NgModule({
    declarations: [PlaybackComponent],
    imports: [
        CommonModule,
        PlaybackRouterModule
    ],
    bootstrap: [PlaybackComponent]
})
export class PlaybackModule { }
