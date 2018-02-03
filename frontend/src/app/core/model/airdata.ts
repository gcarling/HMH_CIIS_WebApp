import { List } from 'immutable';

export class AirData {
   status: string;
   data: {
      aqi: number;
      time: {
         s: string;
      };
      city: {
         name: string;
         url: string;
         geo: List<string>;
      };
      iaqi: {
         pm25: string;
      };
   };
}
