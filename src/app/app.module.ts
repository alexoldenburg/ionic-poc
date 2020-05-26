import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {AppRouterModule} from './app-router.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        AppComponent,
        NavigationBarComponent,
    ],
    imports: [
        BrowserModule,
        AppRouterModule,
        IonicModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
