import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { UploadService } from 'src/app/servicios/upload.service';
import { Global } from 'src/app/servicios/global';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css'],
  providers: [ProyectoService, UploadService]
})
export class CrearProyectoComponent implements OnInit {
  
  public titulo:string;
  public proyecto:Proyecto;
  public annio:number;
  public archivosParaSubir: Array<File>;
  public url:string;

  constructor(
    private _proyectoService: ProyectoService,
    private _uploadService: UploadService
  ){
    this.titulo = "Agregar Proyecto";
    this.annio = new Date().getFullYear();
    this.proyecto = new Proyecto('','','','',this.annio,'','');
    this.archivosParaSubir = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    
  }
  // Se crea el metodo pasando por parametro el formulario que se enviara
  onSubmit(form:any){
    // Se llama el metodo del servicio pasando como parametro el objeto obtenido
    this._proyectoService.guardarProyecto(this.proyecto).subscribe(
      response => {
        //Subir imagen
        if(this.archivosParaSubir){
          this._uploadService.subirArchivo(Global.url+"subirImagen/"+response.proyecto._id, [], this.archivosParaSubir, 'imagen')
          // Si se obtiene un resultado se realiza el registro y se reinicia el formulario
          .then((result:any)=>{
            console.log(result);
            form.reset();
        })};    
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
