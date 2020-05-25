import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../core/services/layout.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  private _layoutSubscription$: Subscription;

  public layout: string;

  /**
   * @param _ls Handles the layout of the application between either Material Design and the original website design.
   */
  constructor(private _ls: LayoutService) { }

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
