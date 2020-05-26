import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live.component';
import {LiveRouterModule} from './live-router.module';

@NgModule({
    declarations: [LiveComponent],
    imports: [
        CommonModule,
        LiveRouterModule
    ]
})
export class LiveModule { }
