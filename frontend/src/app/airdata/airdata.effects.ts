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


import { AirData } from '../core/model';

import {
  AirDataActions,
  AirDataActionTypes,
  LoadAirData,
  LoadAirDataComplete,
  LoadAirDataError
 } from './airdata.actions';

 import * as AirDataActionMethods from './airdata.effects';

@Injectable()
export class AirDataEffects {

  @Effect()
  loadAirQualityData$: Observable<Action> = this.actions$
    .ofType(AirDataActionTypes.LOAD_AIR_DATA)
    .switchMap(action => {

      //const location = action.payload as string;
        return this.api.airQualityData.testAPI('here')
        .map(airData =>
          new LoadAirDataComplete(airData)
        )
        .catch((error: any) => Observable.of(new LoadAirDataError(error)));
    });

  constructor(
    private actions$: Actions,
    private api: APIService,
    private store$: Store<AppState>
  ) { }

}
