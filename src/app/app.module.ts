import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';

import { AppComponent } from './app.component';
import {FirebaseService} from './servicios/firebase.service';

// Must export the config
export const firebaseConfig = {

    apiKey: "AIzaSyARYTSD0712pQT2cNnn0iN4uoSEfNYgwbg",
    authDomain: "o2c01-6540e.firebaseapp.com",
    databaseURL: "https://o2c01-6540e.firebaseio.com",
    storageBucket: "o2c01-6540e.appspot.com",
    messagingSenderId: "790169156079"

};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
