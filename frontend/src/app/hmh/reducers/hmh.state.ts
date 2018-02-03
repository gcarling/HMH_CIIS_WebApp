import { Map, List, Record } from 'immutable';
// import { AirData } from '../../core/model';

export interface HMHState extends Map<string, any> {
    testData: any;
}

export const AirDataRecord = Record({
    testData: ''
});

export const initialState: HMHState = new AirDataRecord() as HMHState;
