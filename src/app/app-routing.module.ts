import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./hero-app/heroes/heroes.component";
import {DashboardComponent} from "./hero-app/dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-app/hero-detail/hero-detail.component";

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent},
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
