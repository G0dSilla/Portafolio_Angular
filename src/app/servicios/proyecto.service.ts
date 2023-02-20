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

        let parametros = JSON.stringify(proyecto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        console.log(parametros);
        
        return this._http.post(this.url+'saveProyecto', parametros, {headers:headers});
    }
}


