import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';

import { AboutModule } from './about/about.module';
import { ExperienceModule } from './experience/experience.module';
import { ToolbarModule } from './toolbar/toolbar.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TransitionComponent } from './transition/transition.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TransitionComponent,
  ],
  imports: [
    AboutModule,
    BrowserModule,
    CoreModule.forRoot(),
    ExperienceModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ToolbarModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
