import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
// learning how angular interact with server

import {HeroesComponent} from './hero-app/heroes/heroes.component';
import {HeroDetailComponent} from './hero-app/hero-detail/hero-detail.component';
import {MessagesComponent} from './common-needs/messages/messages.component';
import {DashboardComponent} from './hero-app/dashboard/dashboard.component';
import {environment} from "../environments/environment.prod";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
