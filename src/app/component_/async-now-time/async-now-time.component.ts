import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-async-now-time',
  templateUrl: './async-now-time.component.html',
  styleUrls: ['./async-now-time.component.css']
})
export class AsyncNowTimeComponent implements OnInit {

  time: Observable<string>;

  constructor() {
    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => {
        observer.next(new Date().toString());
      }, 1000);
    });
  }

  ngOnInit() {
  }

}
