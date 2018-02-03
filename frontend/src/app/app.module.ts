import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


//material imports
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule } from '@angular/material';

import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';

import { AirDataModule } from './hmh/airdata.module';

import { AppState, reducers } from './reducers';
// import { HeaderComponent } from './airdata/components/header/header.component';
export { AppState };

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot([{path: '', redirectTo: '/home', pathMatch: 'full'}]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    AirDataModule,
    CoreModule
  ],
  providers: [],
  exports: [
    MatCardModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
