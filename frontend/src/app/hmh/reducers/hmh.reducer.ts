import { Action, ActionReducer } from '@ngrx/store';
import { HMHState, initialState } from './hmh.state';
import { Map, List, Record } from 'immutable';

// need to import the actions with the methods they contain
import { HMHActionType } from '../hmh.actions';

export function hmhReducer(state: HMHState = initialState, action: any): HMHState {
  switch (action.type) {
    case HMHActionType.TEST_COMPLETE:
      return { ...state,
        testData: action.payload,
      };

    case HMHActionType.SET_FORM_PROP:
      return {
        ...state,
        formData: {
          ...(state.formData || {}),
          ...action.payload
        },
      };

    default:
      return state;
  };
};
