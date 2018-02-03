// 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
// pages
import { AirQualityDataComponent } from './pages/airqualitypage.component'

// components

// state
import * as airDataActions from './airdata.actions';
import { AirDataEffects } from './airdata.effects';

import { AirDataService } from './airdata.service';

// exports
export { AirDataService }
export { AirDataState } from './reducers/airdata.state';
export { airdataReducer } from './reducers/airdata.reducer';

const routes: Routes = [
  {path: 'airqualitydata', component: AirQualityDataComponent}
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([
      AirDataEffects
    ]),
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [
    AirQualityDataComponent
  ],
  providers: [
    AirDataService
    ]
})
export class AirDataModule { }
