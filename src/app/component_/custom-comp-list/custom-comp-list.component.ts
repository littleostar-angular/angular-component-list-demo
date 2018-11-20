import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-list',
  templateUrl: './custom-comp-list.component.html',
  styleUrls: ['./custom-comp-list.component.css']
})
export class CustomCompListComponent implements OnInit {

  customCompList: string[];

  constructor() {
    this.customCompList = [
      'DisplayingData', 'AsyncNowTime'
    ];
  }

  ngOnInit() {
  }

}
