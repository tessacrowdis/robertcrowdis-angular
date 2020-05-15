import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutService } from './services/layout.service';


/**
 * Imports all services and exports them at the root of the application to provide singletons within the application.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    LayoutService
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
