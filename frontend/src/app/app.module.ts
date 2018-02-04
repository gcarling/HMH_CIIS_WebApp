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

import { HMHModule } from './hmh/hmh.module';

import { AppState, reducers } from './reducers';
// import { DankTextInput } from './hmh/components/dankTextInput/dankTextInput.component';
export { AppState };

@NgModule({
  declarations: [
    AppComponent,
    // DankTextInput,
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
    RouterModule.forRoot([{path: '', redirectTo: 'home', pathMatch: 'full'}]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    HMHModule,
    CoreModule
  ],
  providers: [],
  exports: [
    MatCardModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
