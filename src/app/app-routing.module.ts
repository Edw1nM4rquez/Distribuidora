import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductolistaComponent} from './components/productolista/productolista.component';
import { IniciarSesionComponent } from './clientes/iniciar-sesion/iniciar-sesion.component';
import { ModificarComponent } from './clientes/modificar/modificar.component';
import { RegistrarComponent } from './clientes/registrar/registrar.component';

const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full' },
  {path: 'Producto', component: ProductolistaComponent},
  {path: 'Login', component: IniciarSesionComponent},
  {path: 'Modificar', component: ModificarComponent},
  {path: 'Registrar', component:RegistrarComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
