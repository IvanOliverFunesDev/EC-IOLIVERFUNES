import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ConcertsListComponent } from './components/concerts/concerts-list/concerts-list.component';
import { ConcertsPageComponent } from './components/concerts/concerts-page/concerts-page.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { FormnewconcertComponent } from './components/concerts/formnewconcert/formnewconcert.component';


export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: '', component: MainComponent, children: [
            {
                path: 'home', component: HomePageComponent
            },
            {
                path: 'concerts-page', component: ConcertsPageComponent
            },
            {
                path: 'profile', component: ProfileComponent
            },
            {
                path: 'formNewConcert', component: FormnewconcertComponent
            }
        ],
    },

    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'forgot-password', component: ForgotPasswordComponent
    }

];
