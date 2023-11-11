import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import {CicrlesComponent} from './cicrles/cicrles.component';
import {MainComponent} from './main/main.component';
import {OfferlistComponent} from './offerlist/offerlist.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "offers", component: OfferlistComponent},
  {path: "calendar", component: CalendarComponent},
  {path: "circles", component: CicrlesComponent},
  {path: "profile", component: ProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
