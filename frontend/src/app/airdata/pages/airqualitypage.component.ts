import { Component, OnInit } from '@angular/core';
import { AirDataService } from '../airdata.service';

import { AirData } from '../../core/model';

@Component({
  selector: 'app-airqualitypage',
  templateUrl: './airqualitypage.component.html',
  styleUrls: ['./airqualitypage.component.scss']
})
export class AirQualityDataComponent implements OnInit {

  testMessage: AirData;
  constructor(public service: AirDataService) { }

  ngOnInit() {
    this.service.airData$.subscribe((value) => {
      this.testMessage = value;
    });
    this.service.loadAirData();
  }
}
