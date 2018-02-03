import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { compose } from '@ngrx/store';
import { storeFreeze } from "ngrx-store-freeze";

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';

import { AirDataState, airdataReducer } from './airdata/airdata.module';

import { environment } from '../environments/environment';
/**
 * Every reducer module"s default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as airData from './airdata/reducers/airdata.reducer';

export interface AppState {
    airdata: AirDataState;
}

export const reducers = {
    airdata: airdataReducer
}

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
