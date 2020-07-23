import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductolistaComponent} from './components/productolista/productolista.component';
import { IniciarSesionComponent } from './clientes/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path: '', redirectTo:'/Producto',pathMatch:'full' },
  {path: 'Producto', component: ProductolistaComponent},
  {path: 'Login', component: IniciarSesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
