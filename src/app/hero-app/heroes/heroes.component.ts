import {Component, OnInit} from '@angular/core';

import {HEROES} from '../modal/mock-heroes'
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
  heroes = HEROES;
  selectedHero?: Hero;

  constructor(heroService: HeroService) {
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
