import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css'],
  providers: [ProyectoService]
})
export class CrearProyectoComponent implements OnInit {
  
  public titulo:string;
  public proyecto:Proyecto;
  public annio:number;

  constructor(
    private _proyectoService: ProyectoService
  ){
    this.titulo = "Agregar proyecto";
    this.annio = new Date().getFullYear()
    this.proyecto = new Proyecto('','','','',this.annio,'','');
  }

  ngOnInit(): void {
    
  }

  onSubmit(form:any){
    // console.log("Proyecto Agregado")
    // console.log(this.proyecto)
    this._proyectoService.guardarProyecto(this.proyecto).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
