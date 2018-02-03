import { Injectable } from '@angular/core';
import { HMHRepoService } from './hmh.repo.service';

@Injectable()
export class APIService {

  constructor(public airQualityData: HMHRepoService) { }

}
