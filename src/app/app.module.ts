import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './pages/about/about.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { KidsComponent } from './pages/kids/kids.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CardComponent } from './pages/card/card.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavComponent,
    AboutComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    AccessoriesComponent,
    ContactsComponent,
    CardComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
