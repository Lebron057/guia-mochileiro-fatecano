import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';

export const routes: Routes = [
    {
        path: '', component: Login
    },
    {
        path: 'register', component: Register
    },
    {
        path: 'home', component: Home
    },
    {
        path: 'navbar', component: Navbar
    }
];
