import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CardComponent } from './pages/card/card.component';
import { KidsComponent } from './pages/kids/kids.component';

const routes: Routes = [
  {path:"",component: MainComponent},
  {path:"about",component: AboutComponent},
  {path:"men",component: MenComponent},
  {path:"women",component: WomenComponent},
  {path:"kid",component: KidsComponent},
  {path:"accessories",component: AccessoriesComponent},
  {path:"contacts",component: ContactsComponent},
  {path:"card",component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
