import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { MainComponent } from './main/main.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OfferlistComponent } from './offerlist/offerlist.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CicrlesComponent } from './cicrles/cicrles.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BottombarComponent,
    MainComponent,
    CalendarComponent,
    OfferlistComponent,
    TopbarComponent,
    CicrlesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
