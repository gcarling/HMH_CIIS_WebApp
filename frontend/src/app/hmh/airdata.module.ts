// 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
// pages
import { HMHComponent } from './pages/landingpage/landingpage.component'

// components

// state
import * as airDataActions from './hmh.actions';
import { HMHEffects } from './airdata.effects';

import { HMHService } from './airdata.service';

// exports
export { HMHService }
export { HMHState } from './reducers/hmh.state';
export { hmhReducer } from './reducers/hmh.reducer';

const routes: Routes = [
  {path: 'home', component: HMHComponent}
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([
      HMHEffects
    ]),
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [
    HMHComponent
  ],
  providers: [
    HMHService
    ]
})
export class AirDataModule { }
