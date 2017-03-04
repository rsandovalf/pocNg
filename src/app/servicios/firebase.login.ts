import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';

@Injectable()
export class FirebaseLogin {
    public isLoggedIn: boolean =false;
    user : any;

    constructor(private af:AngularFire){
        this.af.auth.subscribe(user => {
            if(user){
                //user logged In
                this.user = user;
                this.isLoggedIn = true;
                console.log(this.user);
            }
            else{
                //user not logged In
                this.user = {};
                this.isLoggedIn = false;
            }
        });
    }

    login(user:Object): Promise<any>{
        return new Promise((resolve, reject) => {
            this.af.auth.login(user).then(res => {
                this.isLoggedIn =true;
                resolve(res)
            }).catch(err => {
                this.isLoggedIn =false;
                reject(err)
            })
        })
    }

    logout(){
        this.af.auth.logout();
    }
}
