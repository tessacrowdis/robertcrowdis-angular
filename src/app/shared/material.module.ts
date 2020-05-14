import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';


/**
 * Module that imports and manages Angular Material modules
 */
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule
  ]
})
export class MaterialModule { }
