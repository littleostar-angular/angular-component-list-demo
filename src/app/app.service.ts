import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import PROD_URL from './const_/prod-url';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly base_url: string;
  private readonly _url: string;

  constructor(private http: HttpClient) {
    this.base_url = environment ? '' : PROD_URL;
    this._url = this.base_url + 'assets/json_/section-list.json';
  }

  getData(): Observable<string> {
    return this.http.get<string>(this._url);
  }
}
