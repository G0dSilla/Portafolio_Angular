import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos';
import { Global } from 'src/app/servicios/global';
import { ProyectoService } from '../../servicios/proyecto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ver-proyecto',
  templateUrl: './ver-proyecto.component.html',
  styleUrls: ['./ver-proyecto.component.css'],
  providers: [ProyectoService],
})
export class VerProyectoComponent implements OnInit {

  public url: string;
  public proyecto: Proyecto;
  public confirmacion: boolean;

  constructor(
    private _proyectoService: ProyectoService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
      this.url = Global.url
      this.proyecto = new Proyecto('','','','',0,'','');
      this.confirmacion = false
    }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let id = params["id"];
      this.obtenerProyecto(id);
    })
  }

  obtenerProyecto(id:any){
    this._proyectoService.obtenerProyectoById(id).subscribe(
      response => {
        this.proyecto = response.proyecto;
      },
      error => {
        console.log(error)
      }      
    );
  }

  confirmarBorrado(confirmacion:boolean){
    this.confirmacion = confirmacion
  }

  eliminarProyecto(id:any){
    // Se llama al servicio pasando el id por parametro
    this._proyectoService.eliminarProyecto(id).subscribe(
      response => {
        // Se valida que llegue el objeto eliminado como respuesta
        if(response.proyecto){
          // Si se borra el registro se redirige a la pagina indicada
          this._router.navigate(['/proyectos']);
        }
      },
      error => {
        //Si ocurre un error se muestra por consola
        console.log('Ocurrio un error al eliminar el proyecto ' + error)
      }
    );
  }

}
