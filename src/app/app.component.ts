import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { LayoutService } from './core/services/layout.service';

import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private _layoutSubscription$: Subscription;
  private _defaultTitle = 'RC';


  public layoutStyle: string;
  public pageTitle: string;

  /**
   * @param _ls Handles the layout of the application between either Material Design and the original website design.
   * @param _route Provides access to information about a route associated with a component that is loaded in an outlet.
   * @param _router A service that provides navigation and URL manipulation capabilities.
   * @param _ts A service that can be used to get and set the title of a current HTML document.
   */
  constructor(private _ls: LayoutService, private _route: ActivatedRoute, private _router: Router, private _ts: Title) { }
  ngOnInit() {
    this.pageTitle = this._ts.getTitle();

    // Subscribe to the router and provide updates to the document title based on the current route.
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this._route.firstChild;
        while (child.firstChild) {
          child = child.firstChild;
        }
        if (child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        } else {
          return this._defaultTitle;
        }
      })
    ).subscribe((pageTitle: string) => {
      this.pageTitle = pageTitle;
      const fullTitle = `${pageTitle} | Robert Crowdis`;
      this._ts.setTitle(fullTitle);
    });

    // Subscribe to layout changes and pass the changes to children components
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
