import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//Importacion de Componentes
import { AppComponent } from './app.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CrearProyectoComponent } from './componentes/crear-proyecto/crear-proyecto.component';
//Importacion de FontAwesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faStackOverflow,
  faGithub,
  faMedium,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { VerProyectoComponent } from './componentes/ver-proyecto/ver-proyecto.component';
import { EditarProyectoComponent } from './componentes/editar-proyecto/editar-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    ContactoComponent,
    ProyectosComponent,
    InicioComponent,
    CrearProyectoComponent,
    VerProyectoComponent,
    EditarProyectoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(
      faGithub,
      faFacebook
    );
  }
}
