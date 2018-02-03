import { Component, OnInit } from '@angular/core';
import { HMHService } from '../../airdata.service';

// import { AirData } from '../../core/model';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class HMHComponent implements OnInit {

  testMessage: any;
  constructor(public service: HMHService) { }

  ngOnInit() {
    console.log('init!');
    // this.service.airData$.subscribe((value) => {
    //   this.testMessage = value;
    // });
    this.service.loadTest();
  }
}
