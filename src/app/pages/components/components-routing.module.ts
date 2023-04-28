import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { InfoComponent } from './info/info.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CursosComponent } from './cursos/cursos.component';
import { MasajesComponent } from './masajes/masajes.component';
import { ReservaComponent } from './reserva/reserva.component';
import { PagoComponent } from './pago/pago.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    component:BlogComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'masajes',
    component: MasajesComponent
  },
  {
    path: 'reserva',
    component: ReservaComponent

  },
  {
    path: 'pago',
    component: PagoComponent

  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
