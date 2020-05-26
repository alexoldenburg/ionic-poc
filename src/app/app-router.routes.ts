import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'live',
        loadChildren: () => import('live').then( m => m.LiveModule )
    },
    {
        path: 'playback',
        loadChildren: () => import('playback').then( m => m.PlaybackModule )
    },
    {
        path: 'testmodule',
        loadChildren: () => import('libname').then( m => m.LiveModule )
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/live'
    }
];
