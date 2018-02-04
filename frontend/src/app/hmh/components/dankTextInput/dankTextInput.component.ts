import { FormsModule } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { HMHService } from '../../airdata.service';

// import { AirData } from '../../core/model';

@Component({
  selector: 'dank-text-input',
  templateUrl: './dankTextInput.component.html',
  styleUrls: ['./danktextinput.component.scss']
})
export class DankTextInput implements OnInit {
  @Input() label: string;
  @Input() propToSet: string;

  textValue: string;

  constructor(public service: HMHService) { }

  ngOnInit() {
  }

  setProp(val: any) {
    console.log('val: ', val);
    this.service.setProp({
      [this.propToSet]: val
    });
  }
}
