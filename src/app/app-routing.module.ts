import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  { // TODO: Swap this route out with the proper page once it is completed - RC 5/18/20
    path: 'work',
    component: AboutComponent,
    data: { title: 'Work' }
  },
  {
    path: '**',
    component: AboutComponent,
    data: { title: 'DNE' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
