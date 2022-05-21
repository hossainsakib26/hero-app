import {Component, OnInit} from '@angular/core';

import {Hero} from "../modal/hero";
import {HeroService} from "../services/hero.service";

@Component({
  // @Component is a decorator function that specifies the Angular metadata for the component.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // property
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {

    this.getHeroes();

  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
