import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from '../../models/proyectos';
import { ProyectoService } from '../../servicios/proyecto.service';
import { Global } from '../../servicios/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers: [ProyectoService]
})
export class ProyectosComponent implements OnInit {
  
  public icono1:any;
  public proyectos: Proyecto[];
  public url:string;

  constructor(
    private _proyectoService: ProyectoService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.icono1 = faSearch;
    this.proyectos = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  obtenerProyectos(){
    this._proyectoService.obtenerProyectos().subscribe(
      response => {
        if(response.proyectos){
          this.proyectos = response.proyectos  
        }
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  
}
