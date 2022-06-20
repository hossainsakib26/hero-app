import { Component, OnInit } from '@angular/core';

import {Hero} from '../../modal/hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Supper Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(19, 'Dr. Vodai', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(){this.submitted = true;}

  SkyDog(): Hero{
    const myHero =  new Hero(
      42,
      'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover'
    );
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

}
