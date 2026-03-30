import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Register } from './features/register/register';

export default [
    {path: '', component: Login},
    {path: 'register', component: Register}
] as Routes;
