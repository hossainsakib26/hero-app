import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
// learning how angular interact with server

import {HeroesComponent} from './hero-app/heroes/heroes.component';
import {HeroDetailComponent} from './hero-app/hero-detail/hero-detail.component';
import {MessagesComponent} from './common-needs/components/messages/messages.component';
import {DashboardComponent} from './hero-app/dashboard/dashboard.component';
import {HeroSearchComponent} from './common-needs/components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
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
