import { Component } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';

import { Hero } from './hero';
import { HeroesService } from './heroes.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { PowersService } from '../powers/powers.service';
import { Powers } from '../powers/powers';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    NgFor,
    UpperCasePipe,
    RouterModule
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroesService,
    private messageService: MessageService,
    private powersService: PowersService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;

    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }
}
