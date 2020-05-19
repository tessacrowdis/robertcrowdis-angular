import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';

import { DOCUMENT } from '@angular/common';

/**
 * Handles the layout of the application between either Material Design and the original website design.
 */
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _layout$: ReplaySubject<string> = new ReplaySubject<string>();
  private _transitionState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(@Inject(DOCUMENT)private _document: Document) {
    this.instantiateLayout();
  }

  /**
   * Getter function for the current layout selected by the user.
   *
   * @returns Observable that contains a string value with the currently selected layout.
   */
  get layout() {
    return this._layout$;
  }

  /**
   * Getter function for the state of transitioning animation.
   *
   * @returns Observable that contains the state of animation happening.
   */
  get transitionState() {
    return this._transitionState$;
  }

  /**
   * Applies a new dynamic stylesheet to the website depending on the layout selected by the user.
   *
   * @param layout Layout selected by the user (choice between 'material' and 'custom')
   */
  private _appendNewStyling(layout: string): void {
    const cssFile = layout === 'material' ? 'material.css' : 'default.css';
    const headEl = this._document.getElementsByTagName('head')[0];
    console.log(headEl);

    const existingLinkEl = this._document.getElementById('client-theme') as HTMLLinkElement;

    if (existingLinkEl) {
      console.log(cssFile);
      existingLinkEl.href = cssFile;
    } else {
      const newLinkEl = this._document.createElement('link');
      newLinkEl.id = 'client-theme';
      newLinkEl.rel = 'stylesheet';
      newLinkEl.href = cssFile;
      console.log(newLinkEl);

      headEl.appendChild(newLinkEl);
    }
  }

  /**
   * Fetches the user's last selected layout preference from local storage and sets the website style accordingly.
   * If no layout is found, then the default will be set as 'custom' in local storage and in the application.
   */
  public instantiateLayout(): void {
    const layout = String(localStorage.getItem('layout'));
    if (layout === 'material') {
      this._layout$.next('material');
      this._appendNewStyling('material');
    } else {
      if (layout === 'null' || layout === 'undefined') {
        localStorage.setItem('layout', 'custom');
      }
      this._appendNewStyling('custom');
      this._layout$.next('custom');
    }
  }

  /**
   * Sets a string inside of the browser's local storage session, to save styling between visits of the website.
   * Also triggers an animation state for the transition to begin.
   *
   * @param layoutType String containing 'material' or 'custom'. Default is 'material'.
   */
  public setLayout(layoutType: string): void {
    localStorage.setItem('layout', layoutType);
    this._transitionState$.next(true);
    setTimeout(() => {
      this._appendNewStyling(layoutType);
      this._layout$.next(layoutType);
      this._transitionState$.next(false);
    }, 500);
  }

}
