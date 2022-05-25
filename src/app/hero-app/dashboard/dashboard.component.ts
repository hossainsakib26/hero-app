import { Component, OnInit } from '@angular/core';
import {Hero} from "../modal/hero";
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes.slice(1,5) );
    console.log(this.heroService.getHeroes().subscribe(heroes => this.heroes.slice(1,5) ))
  }

}
