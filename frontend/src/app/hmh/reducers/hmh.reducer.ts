import { Action, ActionReducer } from '@ngrx/store';
import { HMHState, initialState } from './hmh.state';
import { Map, List, Record } from 'immutable';

// need to import the actions with the methods they contain
// import { HMHActionType, AirDataActions } from '../hmh.actions';

export function hmhReducer(state: HMHState = initialState, action: any): HMHState {
  switch (action.type) {

    default:
      return state;
  };
};
