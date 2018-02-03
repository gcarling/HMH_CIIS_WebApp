import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { AirData } from '../core/model'
import { AppState } from '../app.module';

import * as AirDataActions from './airdata.actions';

import {
  getAirData
} from './reducers/selectors';

@Injectable()
export class AirDataService {
    airData$: Observable<AirData>;

    constructor(private store$: Store<AppState>) {
        this.airData$ = store$.let(getAirData());
    }

    loadAirData() {
      this.store$.dispatch(new AirDataActions.LoadAirData());
    }
}
