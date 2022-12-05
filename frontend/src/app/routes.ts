import { Routes } from '@angular/router';
import { registerModule } from 
// import { SignUpComponent } from './user/sign-up/sign-up.component';


export const appRoutes : Routes = [
    {
         path:'register',component:UserComponent, 
         children:[{ path :'' , component:registerModule }]
     },
    // {
    //      path:'', redirectTo : '/register' , pathMatch : 'full' //hedhy trodha automatiquement tjik ll page mtaa ll sign up 
    // }

]; 
