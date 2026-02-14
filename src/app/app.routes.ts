import { Routes } from '@angular/router';
import {HOME_PATH, WELCOME_PATH} from './core/constants/routes';
import {Home} from './features/home/home';
import {Welcome} from './features/welcome/welcome';

export const routes: Routes = [
    {
        path: "",
        redirectTo: WELCOME_PATH,
        pathMatch: "full",
    },
    {
        path: WELCOME_PATH,
        component: Welcome,
    },
    {
        path: HOME_PATH,
        component: Home
    }
];
