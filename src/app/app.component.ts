import { Component, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from './core/services/layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private _layoutSubscription$: Subscription;
  public layoutStyle: string;

  /**
   * @param _ls Handles the layout of the application between either Material Design and the original website design.
   */
  constructor(private _ls: LayoutService) {}

  ngOnInit() {
    this._layoutSubscription$ = this._ls.layout.subscribe((layout: string) => {
      this.layoutStyle = layout;
    });
  }

  ngOnDestroy() {
    if (this._layoutSubscription$) { this._layoutSubscription$.unsubscribe(); }
  }

  /**
   * Changes the user's layout using the layout service as a controller.
   *
   * @param layoutStyle String of the style to set for the current and future sessions.
   */
  public setLayout(layoutStyle: string) {
    this._ls.setLayout(layoutStyle);
  }
}
