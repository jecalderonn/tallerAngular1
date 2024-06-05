import { Component, OnInit } from '@angular/core';
import { PowersService } from './powers.service';
import { Powers } from './powers';
import { NgFor, UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-powers',
  standalone: true,
  imports: [
    NgFor,
    UpperCasePipe,
    RouterModule
  ],
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {
  powers: Powers[] = [];

  constructor(private powersService: PowersService) { }

  ngOnInit(): void {
    this.getPowers();
  }

  getPowers(): void {
    this.powersService.getAll()
    .subscribe(powers => this.powers = powers);
  }
}