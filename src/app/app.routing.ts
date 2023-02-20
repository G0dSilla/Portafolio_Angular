// Importacion modulos para el router
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Importar componentes
import { ContactoComponent } from "./componentes/contacto/contacto.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { ProyectosComponent } from "./componentes/proyectos/proyectos.component";
import { SobreMiComponent } from "./componentes/sobre-mi/sobre-mi.component";
import { CrearProyectoComponent } from "./componentes/crear-proyecto/crear-proyecto.component";


const appRoutes: Routes = [
    {path: '',          component: InicioComponent},    
    {path: 'sobremi',   component: SobreMiComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'crearProyecto', component:CrearProyectoComponent},
    {path: 'contacto',  component: ContactoComponent},
    {path: '**',        component: InicioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)


