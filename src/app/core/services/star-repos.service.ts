import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * Fetches and manages the repositories that I have starred on Github.
 */
@Injectable({
  providedIn: 'root'
})
export class StarReposService {

  private _myStarredURI = 'https://api.github.com/users/robertcrowdis/starred';

  constructor(private _http: HttpClient) {
    console.log('init star service');
    this._http.get(this._myStarredURI).toPromise()
      .then((success: any) => {
        console.log('Success');
        console.log(success);
        console.log(typeof success);
        // TODO: Check my success and assign to a variable.
      })
      .catch((error: any) => {
        console.error('Error on HTTP get: ');
        console.log(error);
        // TODO: Implement error catching.
      });
  }

}
