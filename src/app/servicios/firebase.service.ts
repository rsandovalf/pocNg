import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class FirebaseService {
    contactos: FirebaseListObservable<any[]>;

    constructor(private af:AngularFire){}

    obtenerContactos(){
        this.contactos = this.af.database.list('/contactos') as FirebaseListObservable<any[]>;
        return this.contactos;
    }

    agregarContacto(contacto){
        this.contactos.push(contacto);
    }

    editarContacto(key, contacto){
        this.contactos.update(key, contacto);
    }

    borrarContacto(key){
        this.contactos.remove(key);
    }


}