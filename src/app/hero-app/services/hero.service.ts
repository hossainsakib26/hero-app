import { Injectable } from '@angular/core';
import { HEROES } from '../modal/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() { return HEROES }

}
