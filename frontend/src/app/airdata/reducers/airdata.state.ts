import { Map, List, Record } from 'immutable';
import { AirData } from '../../core/model';

export interface AirDataState extends Map<string, any> {
    testData: AirData;
}

export const AirDataRecord = Record({
    testData: ''
});

export const initialState: AirDataState = new AirDataRecord() as AirDataState;
