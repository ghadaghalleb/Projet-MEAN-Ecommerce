import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardaccComponent } from './cardacc/cardacc.component';
import { CardbouttonComponent } from './cardboutton/cardboutton.component';
import { CardsComponent } from './cards/cards.component';
import { Cards1Component } from './cards1/cards1.component';
import { Cards2Component } from './cards2/cards2.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ContactComponent } from './contact/contact.component';
import { FlipcardComponent } from './flipcard/flipcard.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LinksComponent } from './links/links.component';
import { MdpComponent } from './mdp/mdp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageAccComponent } from './page-acc/page-acc.component';
import { PageBouttComponent } from './page-boutt/page-boutt.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PagePanierComponent } from './page-panier/page-panier.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"register",component:RegisterComponent},
  {path:"mdp",component:MdpComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"caroussel",component:CarousselComponent},
  {path:"footer",component:FooterComponent},
  {path:"chatbot",component:ChatbotComponent},
  {path:"cards",component:CardsComponent},
  {path:"cards1",component:Cards1Component},
  {path:"contact",component:ContactComponent},
  {path:"home",component:HomeComponent},
  {path:"links",component:LinksComponent},
  {path:"cardboutton",component:CardbouttonComponent},
  {path:"cardacc",component:CardaccComponent},
  {path:"cards2",component:Cards2Component},
  {path:"flipcard",component:FlipcardComponent},
  {path:"page-contact",component:PageContactComponent},
  {path:"page-boutt",component:PageBouttComponent},
  {path:"page-acc",component:PageAccComponent},
  {path:"page-panier",component:PagePanierComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
 

// how can i import MatIconModule ?



