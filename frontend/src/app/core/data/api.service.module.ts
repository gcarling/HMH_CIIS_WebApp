import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { APIService } from './api.service';
import { AirDataRepoService } from './airdata.repo.service';

@NgModule({
  imports: [ HttpModule ],
  exports: [],
  declarations: [],
  providers: [
    APIService,
    AirDataRepoService
  ],
})
export class APIModule { }
