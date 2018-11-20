import {Component} from '@angular/core';
import {Hero} from '../../model_/hero';

@Component({
  selector: 'app-displaying-data',
  templateUrl: './displaying-data.component.html',
})
export class DisplayingDataComponent {
  title: string;
  heroes: Hero[];
  myHero: Hero;

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    this.myHero = this.heroes[0];
  }
}
