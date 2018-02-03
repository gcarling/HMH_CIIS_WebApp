import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { APIService } from './api.service';
import { HMHRepoService } from './hmh.repo.service';

@NgModule({
  imports: [ HttpModule ],
  exports: [],
  declarations: [],
  providers: [
    APIService,
    HMHRepoService
  ],
})
export class APIModule { }
