import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './hero-app/heroes/heroes.component';
import { MockHeroesComponent } from './hero-app/mock-heroes/mock-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MockHeroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
