import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroesComponent,
    MessageComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'League Of Heroes';
}
