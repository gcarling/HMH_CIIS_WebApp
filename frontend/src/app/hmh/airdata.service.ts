import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

// import { AirData } from '../core/model'
import { AppState } from '../app.module';

import * as HMHActions from './hmh.actions';

import {
  getAirData
} from './reducers/selectors';

@Injectable()
export class HMHService {
    airData$: Observable<any>;

    constructor(private store$: Store<AppState>) {
        this.airData$ = store$.let(getAirData());
    }

    loadTest() {
      this.store$.dispatch(new HMHActions.LoadTest());
    }
}
