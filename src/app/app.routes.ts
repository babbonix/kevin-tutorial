import { Routes } from '@angular/router';
import { StudioGhibliComponent } from './studio-ghibli/studio-ghibli.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'studio-ghibli',
    component: StudioGhibliComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];
