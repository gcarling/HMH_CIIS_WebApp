import { Action } from '@ngrx/store';
import { AirData } from '../core/model';

export enum AirDataActionTypes {
  LOAD_AIR_DATA = '[AirData] LOAD_AIR_DATA',
  LOAD_AIR_DATA_COMPLETE = '[AirData] LOAD_AIR_DATA_COMPLETE',
  LOAD_AIR_DATA_ERROR = '[AirData] LOAD_AIR_DATA_ERROR',
}

    /**
     * Loading Air Data
     * @class LoadAirData
     * @implements {Action}
     */
  export class LoadAirData implements Action {
    readonly type = AirDataActionTypes.LOAD_AIR_DATA;
    constructor () {};
  }

      /**
     * Loading Air Data Success
     * @class LoadAirDataSuccess
     * @implements {Action}
     */
  export class LoadAirDataComplete implements Action {
    readonly type = AirDataActionTypes.LOAD_AIR_DATA_COMPLETE;
    constructor(public payload: any) {};
  }

      /**
     * Loading Air Data Error
     * @class LoadAirDataError
     * @implements {Action}
     */
  export class LoadAirDataError implements Action {
    readonly type = AirDataActionTypes.LOAD_AIR_DATA_ERROR;
    constructor(public payload: { error: Error}) {};
  }


export type AirDataActions
  = LoadAirData
  | LoadAirDataComplete
  | LoadAirDataError;
