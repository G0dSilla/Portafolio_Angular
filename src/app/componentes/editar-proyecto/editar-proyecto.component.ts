import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/servicios/global';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { UploadService } from 'src/app/servicios/upload.service';
import { Proyecto } from 'src/app/models/proyectos';


@Component({
  selector: 'app-editar-proyecto',
  templateUrl: '../crear-proyecto/crear-proyecto.component.html',
  styleUrls: ['../crear-proyecto/crear-proyecto.component.css'],
  providers: [ProyectoService, UploadService]
})
export class EditarProyectoComponent implements OnInit {
  
  public titulo: string;
  public proyecto: Proyecto;
  public url: string;
  // public editar_proyecto;
  // public status: string;
  public archivosParaSubir: Array<File>;

  constructor(
    private _proyectoService: ProyectoService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.titulo = 'Editar Proyecto';
    this.proyecto = new Proyecto('','','','',0,'','');
    this.archivosParaSubir = []
    this.url = Global.url
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.obtenerProyecto(id);
    })
  }

  obtenerProyecto(id:any){
    this._proyectoService.obtenerProyectoById(id).subscribe(
      response => {
        this.proyecto = response.proyecto;
      },
      error => {
        console.log('Ha ocurrido un error al obtener el proyecto ' + error);
      }
    )
  }

  onSubmit(form:any){
    // Se llama el metodo del servicio pasando como parametro el objeto obtenido
    this._proyectoService.actualizarProyecto(this.proyecto).subscribe(
      response => {
        //Subir imagen
        if(this.archivosParaSubir){
          this._uploadService.subirArchivo(Global.url+"subirImagen/"+response.proyecto._id, [], this.archivosParaSubir, 'imagen')
          // Si se obtiene un resultado se realiza el registro y se reinicia el formulario
          .then((result:any)=>{
            if(response.proyecto){
              this._router.navigate(['/verProyecto/'+response.proyecto._id]);
            }
        })}   
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  fileChangeEvent(fileInput:any){
    console.log(fileInput);
    this.archivosParaSubir = <Array<File>>fileInput.target.files;
  }
}
