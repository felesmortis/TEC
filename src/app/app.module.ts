import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularFire2';
import { AngularFireDatabaseModule } from 'angularFire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const firebaseCredentials = {
  apiKey: 'AIzaSyDvi6EF7eVIFavukg33UrKbQvuUE8kMp08',
  authDomain: 'ethentian-chronicles.firebaseapp.com',
  databaseURL: 'https://ethentian-chronicles.firebaseio.com',
  projectId: 'ethentian-chronicles',
  storageBucket: 'ethentian-chronicles.appspot.com',
  messagingSenderId: '316164895362'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseCredentials),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
