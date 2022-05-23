import { Injectable } from '@angular/core';
//import observable for data, [of is a rxjs function symbol
import {Observable, of} from  'rxjs';

//personal created imports
import { HEROES } from '../modal/mock-heroes';
import {Hero} from "../modal/hero";
import {MessageService} from "../../../app/common-needs/services/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
