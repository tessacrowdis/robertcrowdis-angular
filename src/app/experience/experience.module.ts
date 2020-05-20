import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';

import { ExperienceComponent } from './experience.component';
import { ExperienceDefaultComponent } from './experience-default/experience-default.component';
import { ExperienceMaterialComponent } from './experience-material/experience-material.component';


@NgModule({
  declarations: [
    ExperienceDefaultComponent,
    ExperienceMaterialComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
