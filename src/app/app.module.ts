import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';

import { AppComponent } from './app.component';
import {AppLogin} from './app.login';
import {FirebaseService} from './servicios/firebase.service';
import {FirebaseLogin} from './servicios/firebase.login';

// Must export the config
export const firebaseConfig = {

    apiKey: "AIzaSyARYTSD0712pQT2cNnn0iN4uoSEfNYgwbg",
    authDomain: "o2c01-6540e.firebaseapp.com",
    databaseURL: "https://o2c01-6540e.firebaseio.com",
    storageBucket: "o2c01-6540e.appspot.com",
    messagingSenderId: "790169156079"

};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}



@NgModule({
  declarations: [
    AppComponent, AppLogin
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [FirebaseService, FirebaseLogin],
  bootstrap: [AppLogin]
})
export class AppModule { }
