// Importacion modulos para el router
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Importar componentes
import { ContactoComponent } from "./componentes/contacto/contacto.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { ProyectosComponent } from "./componentes/proyectos/proyectos.component";
import { SobreMiComponent } from "./componentes/sobre-mi/sobre-mi.component";
import { CrearProyectoComponent } from "./componentes/crear-proyecto/crear-proyecto.component";
import { VerProyectoComponent } from "./componentes/ver-proyecto/ver-proyecto.component";
import { EditarProyectoComponent } from "./componentes/editar-proyecto/editar-proyecto.component";

const appRoutes: Routes = [
    {path: '',          component: InicioComponent},    
    {path: 'sobremi',   component: SobreMiComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'crearProyecto', component:CrearProyectoComponent},
    {path: 'verProyecto/:id', component: VerProyectoComponent},
    {path: 'contacto',  component: ContactoComponent},
    {path: 'editarProyecto/:id', component: EditarProyectoComponent},
    {path: '**',        component: InicioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)


