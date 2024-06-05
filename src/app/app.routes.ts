import { Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { PowersComponent } from './powers/powers.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailsComponent } from './hero-details/hero-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'powers',
    component: PowersComponent,
  },
  {
    path: 'dashboard',
    // component: DashboardComponent
    loadComponent: () => import('./dashboard/dashboard.component').then(module => module.DashboardComponent)
  }
];
