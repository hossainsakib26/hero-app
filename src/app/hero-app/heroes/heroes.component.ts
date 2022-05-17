import {Component, OnInit} from '@angular/core';

import {IHero} from '../i-hero-types/IHero';
import {HEROES} from '../modal/mock-heroes'
import {Hero} from "../modal/hero";

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

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
