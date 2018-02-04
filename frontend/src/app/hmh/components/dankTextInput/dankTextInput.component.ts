import { FormsModule } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { HMHService } from '../../airdata.service';

// import { AirData } from '../../core/model';

@Component({
  selector: 'dank-text-input',
  templateUrl: './danktextinput.component.html',
  styleUrls: ['./danktextinput.component.scss']
})
export class DankTextInput implements OnInit {
  @Input() label: string;
  @Input() propToSet: string;

  textValue: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    console.log('changes: ', changes);
  }

  setProp(val: any) {
    console.log('val: ', val);
  }
}
