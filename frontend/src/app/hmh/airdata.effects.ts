import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { AppState } from '../app.module';
import { APIService } from '../core/core.module';


// import { AirData } from '../core/model';

import {
  HMHActionType,
  LoadTest,
  LoadTestComplete,
  LoadTestError,
 } from './hmh.actions';

 import * as AirDataActionMethods from './airdata.effects';

@Injectable()
export class HMHEffects {

  @Effect()
  loadTest$: Observable<Action> = this.actions$
    .ofType(HMHActionType.TEST)
    .switchMap(action => {

      //const location = action.payload as string;
        console.log('eyo bish');
        return this.api.airQualityData.testAPI('here')
        .map(airData =>
          new LoadTestComplete(airData)
        )
        .catch((error: any) => Observable.of(new LoadTestError(error)));
    });

  constructor(
    private actions$: Actions,
    private api: APIService,
    private store$: Store<AppState>
  ) { }

}
