import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutService } from './services/layout.service';
import { StarReposService } from './services/star-repos.service';


/**
 * Imports all services and exports them at the root of the application to provide singletons within the application.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    LayoutService,
    StarReposService
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
