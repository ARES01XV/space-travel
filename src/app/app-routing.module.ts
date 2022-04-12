import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { EarthComponent } from './earth/earth.component';
import { IndexComponent } from './index/index.component';
import { MarsComponent } from './mars/mars.component';
import { MercuryComponent } from './mercury/mercury.component';
import { SafetyComponent } from './safety/safety.component';
import { TitanComponent } from './titan/titan.component';

const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: 'safety', component: SafetyComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'mercury', component: MercuryComponent},
  {path: 'earth', component: EarthComponent},
  {path: 'mars', component: MarsComponent},
  {path: 'titan', component: TitanComponent},
  {path: 'book-now', component: BookComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
