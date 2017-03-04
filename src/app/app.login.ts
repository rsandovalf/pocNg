import {Component} from '@angular/core';
import {FirebaseLogin} from "./servicios/firebase.login";

@Component({
    selector: 'app-login',
    templateUrl: './app.login.html'

})
export class AppLogin{

    user: Object = {email:'', password:''};
    errorLogin:boolean=false;

    constructor(private fl:FirebaseLogin){}

    login(){
        this.fl.login(this.user).then( (res) => {
            console.log(res)
            this.errorLogin = false
        } , err => {
            console.log(err)
            this.errorLogin = true
        } )
    }
}