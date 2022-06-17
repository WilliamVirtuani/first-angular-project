import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero = { id: 0, name: '' };
  heroes = HEROES;

  constructor() {}

  onSelect(hero: Hero) {
    console.log('hero', hero);
    this.selectedHero = hero;
  }

  ngOnInit(): void {}
}
