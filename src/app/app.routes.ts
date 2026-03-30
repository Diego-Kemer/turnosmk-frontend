import { Routes } from '@angular/router';
import { authCanGuard } from './core/guard/auth-can-guard';


export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./auth/auth.routes') },
    {path: 'res', loadChildren: ()=> import('./public/public-page.routes')},
    {path: 'user-panel', loadChildren: ()=> import('./user-panel/user-panel.routes'), canActivate: [authCanGuard]},
    { path: '**', redirectTo: '' }
];