import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./hero-app/heroes/heroes.component";

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) // using forRoot() because configuring the router at the application root level.
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
