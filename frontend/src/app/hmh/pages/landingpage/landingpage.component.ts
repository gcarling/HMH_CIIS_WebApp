import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HMHService } from '../../airdata.service';

// import { AirData } from '../../core/model';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingPageComponent implements OnInit {

  testMessage: any;
  name: any;

  constructor(public service: HMHService) { }

  ngOnInit() {
    console.log('init!');
    this.service.testData$.subscribe((value) => {
      this.testMessage = value;
    });
    this.service.loadTest();
  }

  testChagne(test: any) {
    console.log('test: ', test);
  }

  onSubmit(data: any) {
    console.log('this.name: ', this.name);
  }
}
