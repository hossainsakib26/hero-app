import { Component, OnInit } from '@angular/core';

import {Hero} from '../../modal/hero';
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit{

  powers = ['Really Smart', 'Supper Flexible', 'Super Hot', 'Weather Changer'];

  heroes: Hero[] = [];
  model = new Hero();

  submitted = false;

  constructor(private _service: HeroService) {
    _service.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {

  }

  onSubmit(hero: Hero){
    this._service.addHero(hero).subscribe(c => this.heroes.push(c));
    console.log(this.heroes);
  }
  //
  // SkyDog(): Hero{
  //   const myHero =  new Hero(
  //     42,
  //     'SkyDog',
  //     'Fetch any object at any distance',
  //     'Leslie Rollover'
  //   );
  //   return myHero;
  // }

  newHero(){
    this.model = new Hero();
  }

}
