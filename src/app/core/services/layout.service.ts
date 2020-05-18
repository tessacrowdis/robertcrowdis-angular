import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';


/**
 * Handles the layout of the application between either Material Design and the original website design.
 */
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _layout$: ReplaySubject<string> = new ReplaySubject<string>();
  private _transitionState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
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
   * Fetches the user's last selected layout preference from local storage and sets the website style accordingly.
   * If no layout is found, then the default will be set as 'custom' in local storage and in the application.
   */
  public instantiateLayout(): void {
    const layout = String(localStorage.getItem('layout'));
    if (layout === 'material') {
      this._layout$.next('material');
    } else {
      if (layout === 'null' || layout === 'undefined') {
        localStorage.setItem('layout', 'custom');
      }
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
      this._layout$.next(layoutType);
      this._transitionState$.next(false);
    }, 500);
  }

}
