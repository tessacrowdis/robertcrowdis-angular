import { Injectable } from '@angular/core';


/**
 * Services that allows setting of the style of the application, between Material Design and the original website design.
 */
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  /**
   * Sets a string inside of the browser's local storage session, to save styling between visits of the website.
   *
   * @param layoutType String containing 'material' or 'custom'. Default is 'material'
   */
  public setLayout(layoutType: string = 'material'): void {
    localStorage.setItem('layout', layoutType);
  }

  /**
   * Fetches the current
   */
  public getLayout(): string {
    const layout = localStorage.getItem('layout');
    console.log('Got layout: ' + layout);
    console.log(typeof layout);
    // if (layout)
    return String(layout);
  }

}
