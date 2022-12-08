import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MdpComponent } from './mdp/mdp.component';


export const appRoutes : Routes = [
    {
         path:'register',component:RegisterComponent, 
        //  children:[{ path :'' , component:RegisterComponent }]
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
