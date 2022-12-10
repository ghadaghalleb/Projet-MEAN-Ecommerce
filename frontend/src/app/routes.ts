import { Routes } from '@angular/router';
// import { login } from './register/register.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MdpComponent } from './mdp/mdp.component';
import { LoginComponent } from './login/login.component';


export const appRoutes : Routes = [
    {
         path:'login',component:LoginComponent, 
         children:[{ path :'' , component:LoginComponent }]
     },
    // {
    //      path:'', redirectTo : '/register' , pathMatch : 'full' //hedhy trodha automatiquement tjik ll page mtaa ll sign up 
    // }
    {
        path:'inscription',component:InscriptionComponent, 
     },
     {
        path:'mdp',component:MdpComponent, 
     },

]; 
