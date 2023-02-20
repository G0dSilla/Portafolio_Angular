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


@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    ContactoComponent,
    ProyectosComponent,
    InicioComponent,
    CrearProyectoComponent
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
