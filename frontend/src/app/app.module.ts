import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdpComponent } from './mdp/mdp.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CardsComponent } from './cards/cards.component';
import { Cards1Component } from './cards1/cards1.component';
import { ContactComponent } from './contact/contact.component';
import { LinksComponent } from './links/links.component';
import { CardbouttonComponent } from './cardboutton/cardboutton.component';
import { CardaccComponent } from './cardacc/cardacc.component';
import { Cards2Component } from './cards2/cards2.component';
import { FlipcardComponent } from './flipcard/flipcard.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAccComponent } from './page-acc/page-acc.component';
import { PageBouttComponent } from './page-boutt/page-boutt.component';
import { PagePanierComponent } from './page-panier/page-panier.component';

@NgModule({
  declarations: [
    AppComponent,
    MdpComponent,
    InscriptionComponent,
    RegisterComponent,
    NavbarComponent,
    CarousselComponent,
    HomeComponent,
    FooterComponent,
    ChatbotComponent,
    CardsComponent,
    Cards1Component,
    ContactComponent,
    LinksComponent,
    CardbouttonComponent,
    CardaccComponent,
    Cards2Component,
    FlipcardComponent,
    PageContactComponent,
    PageAccComponent,
    PageBouttComponent,
    PagePanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
