import { Component, OnInit } from '@angular/core';
import { HMHService } from '../../airdata.service';

// import { AirData } from '../../core/model';

console.log('WAT ');

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingPageComponent implements OnInit {

  testMessage: any;
  constructor(public service: HMHService) { console.log('init!'); }

  ngOnInit() {
    console.log('init!');
    // this.service.airData$.subscribe((value) => {
    //   this.testMessage = value;
    // });
    this.service.loadTest();
  }
}
