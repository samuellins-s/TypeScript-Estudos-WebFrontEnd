import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
    {
        path: '/home', 
        component: HomeComponent // este componente aparece no (http://localhost:4200/home)
    }
];
