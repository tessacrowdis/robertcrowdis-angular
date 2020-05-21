import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar.component';
import { ToolbarDefaultComponent } from './toolbar-default/toolbar-default.component';
import { ToolbarMaterialComponent } from './toolbar-material/toolbar-material.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    ToolbarDefaultComponent,
    ToolbarMaterialComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
