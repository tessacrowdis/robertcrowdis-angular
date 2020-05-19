import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMaterialComponent } from './about-material/about-material.component';
import { AboutDefaultComponent } from './about-default/about-default.component';
import { AboutComponent } from './about.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    AboutComponent,
    AboutDefaultComponent,
    AboutMaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
