import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import PROD_URL from './const_/prod-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  githubUrl: string;
  sectionList: string[];

  constructor(private service: AppService) {
    this.githubUrl = PROD_URL;
  }

  ngOnInit(): void {
    this.service.getData().subscribe(obj => this.sectionList = obj['data']);
  }


}
