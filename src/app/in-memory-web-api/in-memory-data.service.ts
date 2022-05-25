import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from '../hero-app/modal/hero'
import {HEROES} from "../hero-app/modal/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      {id: 12, name: 'Dr. Hulk'},
      {id: 13, name: 'Captain America'},
      {id: 14, name: 'Captain Carter'},
      {id: 15, name: 'Dr. Strange'},
      {id: 16, name: 'She Hulk'},
      {id: 17, name: 'Iron Man'},
      {id: 18, name: 'Thor'},
      {id: 19, name: 'Lady Thor'},
      {id: 20, name: 'Black Panther'},
    ];
    console.log(`in data service ${{heroes}}`)
    return heroes;
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genID(heroes: Hero[]): number {
    return (heroes.length > 0)? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
}
