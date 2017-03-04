## Actualización de angular-cli

Run `npm uninstall -g angular-cli @angular/cli`.

Run `npm cache clean`.

Run `npm install -g @angular/cli@latest`.

## Creación de plantilla de Aplicación

Run `ng new o2c-fire`.
Run `cd o2c-fire`.
Run `ng serve`.

Navigate to `http://localhost:4200/`.

## Inclusión bootstrap
## Esta linea es para GIT!!


## Inclusión de jquery que es usado por bootstrap.


## Inclusión de libreria angular para Firebase.

npm install firebase angularfire2 --save

--save agrega las dependencias en el proyecto, especificamente en package.json

## Proyecto en Firebase.

Se crea proyecto y base de datos.

Se cambian reglas de seguridad.

## Configuración de libreria firebase en angular.

Setup de @NgModule

Agregar metadata import { AngularFireModule } from 'angularfire2';

e incorporar configuración de keys de firebase en   app.module.ts.

Consola Firebase -> Overview -> Añadir Firebase a app web -> Copiar Código.

## Creación de versión de producción

Run `ng build --prod`

Luego revisar la ruta base del index.html para que no se caiga 

Revisar `<base href="/">`

