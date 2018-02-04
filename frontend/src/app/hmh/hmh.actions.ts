import { Action } from '@ngrx/store';
// import { AirData } from '../core/model';

export enum HMHActionType {
  TEST = 'TEST',
  TEST_COMPLETE = 'TEST_COMPLETE',
  TEST_ERROR = 'TEST_ERROR',
  SET_FORM_PROP = 'SET_FORM_PROP',
}

    /**
     * Loading Air Data
     * @class LoadAirData
     * @implements {Action}
     */
  export class LoadTest implements Action {
    readonly type = HMHActionType.TEST;
    constructor () {};
  }

  export class SetFormProp implements Action {
    readonly type = HMHActionType.SET_FORM_PROP;
    constructor(public payload: any) {};
  }

      /**
     * Loading Air Data Success
     * @class LoadAirDataSuccess
     * @implements {Action}
     */
  export class LoadTestComplete implements Action {
    readonly type = HMHActionType.TEST_COMPLETE;
    constructor(public payload: any) {};
  }

      /**
     * Loading Air Data Error
     * @class LoadAirDataError
     * @implements {Action}
     */
  export class LoadTestError implements Action {
    readonly type = HMHActionType.TEST_ERROR;
    constructor(public payload: { error: Error}) {};
  }


// export type AirDataActions
//   = LoadAirData
//   | LoadAirDataComplete
//   | LoadAirDataError;
