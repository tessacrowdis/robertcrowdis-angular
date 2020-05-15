import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';


/**
 * Handles the layout of the application between either Material Design and the original website design.
 */
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _layout$: ReplaySubject<string> = new ReplaySubject<string>();

  constructor() {
    this.instantiateLayout();
  }


  get layout() {
    return this._layout$;
  }

  /**
   * Sets a string inside of the browser's local storage session, to save styling between visits of the website.
   *
   * @param layoutType String containing 'material' or 'custom'. Default is 'material'
   */
  public setLayout(layoutType: string): void {
    localStorage.setItem('layout', layoutType);
    this._layout$.next(layoutType);
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

}
