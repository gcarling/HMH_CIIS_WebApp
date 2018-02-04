import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

// import { AirData } from '../core/model'
import { AppState } from '../app.module';

import * as HMHActions from './hmh.actions';

import {
  getTestData, getFormData
} from './reducers/selectors';

@Injectable()
export class HMHService {
    testData$: Observable<any>;
    formData$: Observable<any>;

    constructor(private store$: Store<AppState>) {
        this.testData$ = store$.let(getTestData());
        this.formData$ = store$.let(getFormData());
    }

    loadTest() {
      this.store$.dispatch(new HMHActions.LoadTest());
    }

    setProp(payload) {
      this.store$.dispatch(new HMHActions.SetFormProp(payload));
    }

    createUser(user) {
      this.store$.dispatch(new HMHActions.CreateUser(user));
    }
}
