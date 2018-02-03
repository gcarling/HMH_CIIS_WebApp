import { Injectable } from '@angular/core';
import { AirDataRepoService } from './airdata.repo.service';

@Injectable()
export class APIService {

  constructor(public airQualityData: AirDataRepoService) { }

}
