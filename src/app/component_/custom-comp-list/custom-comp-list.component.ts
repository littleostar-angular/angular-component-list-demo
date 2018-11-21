import {Component, OnInit} from '@angular/core';
import {CustomCompListService} from '../../service_/custom-comp-list.service';

@Component({
  selector: 'app-comp-list',
  templateUrl: './custom-comp-list.component.html',
  styleUrls: ['./custom-comp-list.component.css']
})
export class CustomCompListComponent implements OnInit {

  customCompList: string[];

  constructor(private service: CustomCompListService) {
  }

  ngOnInit() {
    this.service.getData().subscribe((obj) => this.customCompList = obj['data']);
  }

}
