import {Component, OnInit} from '@angular/core';

import {Hero} from "../modal/hero";
import {HeroService} from "../services/hero.service";
import {MessageService} from "../../common-needs/services/message.service";

@Component({
  // @Component is a decorator function that specifies the Angular metadata for the component.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // property
  heroes: Hero[] = [];
  // selectedHero?: Hero;

  constructor(private heroService: HeroService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.heroService.refreshNeeded$.subscribe(() => {this.getHeroes();});
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes.length = 0;
    this.heroService.getHeroes().subscribe(heroes =>
      (this.heroes = heroes)
    );
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(x => (x !== hero));
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
