import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import PROD_URL from '../const_/prod-url';

@Injectable({
  providedIn: 'root'
})
export class CustomCompListService {

  private readonly base_url: string;
  private readonly _url: string;

  constructor(private http: HttpClient) {
    this.base_url = environment ? '' : PROD_URL;
    this._url = this.base_url + 'assets/json_/custom-comp-list.json';
  }

  // get custom-comp-list.json
  getData(): Observable<string> {
    return this.http.get<string>(this._url);
  }

}
