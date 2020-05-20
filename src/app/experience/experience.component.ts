import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from 'src/app/core/services/layout.service';
import { Subscription } from 'rxjs';

import { EXPERIENCE, Experience } from './experience-data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  private _layoutSubscription$: Subscription;

  public layout: string;
  public experience: Array<Experience>;

  /**
   * @param _ls Handles the layout of the application between either Material Design and the original website design.
   */
  constructor(private _ls: LayoutService) {
    this.experience = EXPERIENCE;
  }

  ngOnInit(): void {
    this._layoutSubscription$ = this._ls.layout.subscribe((layout: string) => {
      this.layout = layout;
      console.log('Layout was changed to + ' + layout);
    });
  }

  ngOnDestroy(): void {
    if (this._layoutSubscription$) { this._layoutSubscription$.unsubscribe(); }
  }

}
