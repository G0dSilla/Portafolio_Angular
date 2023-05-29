import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Proyecto } from "../models/proyectos";
import { Global } from "./global";


@Injectable()
export class ProyectoService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        console.log('Servicio de prueba con angular');
    }

    guardarProyecto(proyecto:Proyecto): Observable<any> {
        // Convertimos a JSON el objeto obtenido por parametro y lo almacenamos en una variable
        let parametros = JSON.stringify(proyecto);
        // Configuramos la variable headers
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // Retornamos el valor obtenido de la peticion a la api del backend enviando los datos obtenidos     
        return this._http.post(this.url+'guardarProyecto', parametros, {headers:headers});
    }

    obtenerProyectos(): Observable<any> {
        // Se crea y asigna la variable headers 
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // Se retorna el resultado de la peticion realizada a la api del backend  
        return this._http.get(this.url+'obtenerProyectos', {headers:headers});
    }

    obtenerProyectoById(id:any): Observable<any>{
        // Se crea y asigna la variable headers 
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // Se retorna el resultado de la peticion realizada a la api del backend 
        return this._http.get(this.url+'obtenerProyectoById/'+id, {headers:headers});        
    }

    actualizarProyecto(proyecto:Proyecto): Observable<any>{
        //Se obtienen los datos obtenidos del formulario y se convierten a un objeto JSON
        let parametros = JSON.stringify(proyecto);
        // Se crea y asigna la variable headers
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // Se retorna el resultado de la peticion realizada a la api del backend
        return this._http.put(this.url+'actualizarProyectoById/'+proyecto._id, parametros, {headers:headers})
    }

    eliminarProyecto(id:any): Observable<any>{
        // Se crea y asigna la variable headers
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // Se retorna el resultado de la peticion realizada a la api del backend
        return this._http.delete(this.url+'eliminarProyectoById/'+id, {headers:headers});
    }
}


