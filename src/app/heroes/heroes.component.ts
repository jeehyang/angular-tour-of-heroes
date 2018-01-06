import {Component, OnInit} from '@angular/core';
import {HEROES} from '../nock-heroes';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /*heroes = HEROES;*/
  heroes: Hero[];
  selectedHero: Hero;

  // hero = 'Windstorm';

  // 14~17이 19~24와 결과 같음
   /*hero: Hero = {
     id: 1,
     name: 'Windstorm'
   };
*/
  /* hero: Hero;*/

  constructor(public heroService: HeroService) {
    // name뒤에?를 썼기 때문에 name값 안써도 에러 안남
    // this.hero = new Hero(1);
    // this.hero.id = 1;
    // this.hero.name = 'Windstorm';
  }

  ngOnInit() {
    //비동기식Promise
    /*this.heroService.getHeroes()
      .then(data => this.heroes = data);*/
    this.heroService.getHeroes()
      .subscribe(data => this.heroes = data);
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}

