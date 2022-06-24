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
  }

  ngOnInit(): void {
  }

  allHeroes(): void {
    this.heroes.length = 0;
    this._service.getHeroes().subscribe(heroes =>heroes.length > 0 ? this.heroes = heroes : console.log(`${heroes} is empty`));
  }

  onSubmit(hero: Hero){
    this._service.addHero(hero).subscribe();
  }

  newHero(){
    this.model = new Hero();
  }

}
