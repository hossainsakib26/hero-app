import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '../modal/hero';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // property
  hero?: Hero

  constructor(private rout: ActivatedRoute, private location: Location, private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.rout.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    console.log(this.hero)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero){
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
