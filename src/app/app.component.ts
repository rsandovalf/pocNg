import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2'

import {FirebaseService} from './servicios/firebase.service';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contactos: any[];

  estado : string;
  idActual: string;

  contactoAEditar = {
    nombre :'',
    nombre_de_usuario :'',
    telefono :'',
    correo :'',
    website :'',
    direccion : {
      calle : '',
      ciudad : '',
      codigo_postal : ''
    },
    empresa : {
      nombre : '',
      cargo : ''
    }
  }




  constructor(private fbServicio:FirebaseService){}

  ngOnInit(){
    this.fbServicio.obtenerContactos()
              .subscribe(contactos => this.contactos = contactos);  
  }

  mostrarInformacion(estado, id?){
    this.estado = estado;
    if(id){
      this.idActual =id;
    }
  }

  agregarContacto(formulario:NgForm){
    var contacto = {
      nombre : formulario.value.nombre,
      nombre_de_usuario : formulario.value.usuario,
      telefono : formulario.value.telefono,
      website : formulario.value.website,
      correo : formulario.value.correo,
      direccion : {
        calle : formulario.value.calle,
        ciudad : formulario.value.ciudad,
        codigo_postal : formulario.value.codigo_postal
      },
      empresa : {
        nombre : formulario.value.empresa,
        cargo : formulario.value.cargo
      }
    }

    this.fbServicio.agregarContacto(contacto);
    this.mostrarInformacion('cerrado');

  }

  editar(id){
    var aEditar= this.contactos.find(contacto => contacto.$key == id);

    this.contactoAEditar.nombre = aEditar.nombre;
    this.contactoAEditar.nombre_de_usuario = aEditar.nombre_de_usuario;
    this.contactoAEditar.telefono = aEditar.telefono;
    this.contactoAEditar.correo = aEditar.correo;
    this.contactoAEditar.website = aEditar.website;
    this.contactoAEditar.direccion.calle = aEditar.direccion.calle;
    this.contactoAEditar.direccion.ciudad = aEditar.direccion.ciudad;
    this.contactoAEditar.direccion.codigo_postal = aEditar.direccion.codigo_postal;
    this.contactoAEditar.empresa.nombre = aEditar.empresa.nombre;
    this.contactoAEditar.empresa.cargo = aEditar.empresa.cargo;

    this.mostrarInformacion('editar');
  }

  editarContacto(){
      this.fbServicio.editarContacto(this.idActual, this.contactoAEditar);
      this.mostrarInformacion('cerrar');
  }

  borrarContacto(key){
      this.fbServicio.borrarContacto(key);
  }
}
