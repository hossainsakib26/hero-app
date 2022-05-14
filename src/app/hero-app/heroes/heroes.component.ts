import {Component, OnInit} from '@angular/core';
import {IHero} from '../i-hero-types/IHero';

@Component({
  // @Component is a decorator function that specifies the Angular metadata for the component.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // property
  hero: IHero = {id: 1, name: 'Windstorm'};

  constructor() {
  }

  ngOnInit(): void {
  }

}
