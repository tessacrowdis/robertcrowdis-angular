import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AboutComponent,
    data: { title: 'Home'}
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: { title: 'Experience' }
  },
  { // TODO: Swap this route out with the proper page once it is completed - RC 5/18/20
    path: 'work',
    component: AboutComponent,
    data: { title: 'Work' }
  },
  { // TODO: Look into how this redirect is handled on the DNS - base path might be 'striking' here by mistake - RC 5/19/20
    path: '**',
    component: AboutComponent,
    data: { title: 'Home' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
