import { Injectable } from '@angular/core';

//personal created imports
import { HEROES } from '../modal/mock-heroes';
import {Hero} from "../modal/hero";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }



}
