import {Component, Input, OnInit} from '@angular/core';

import { Hero } from '../modal/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // property
  @Input() hero?: Hero

  constructor() { }

  ngOnInit(): void {
  }

}
