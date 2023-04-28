import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../../shared/shared.module';
import { InfoComponent } from './info/info.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CursosComponent } from './cursos/cursos.component';
import { MasajesComponent } from './masajes/masajes.component';
import { ReservaComponent } from './reserva/reserva.component';
import { PagoComponent } from './pago/pago.component';

@NgModule({
  declarations: [
    BlogComponent,
    InfoComponent,
    NotfoundComponent,
    CursosComponent,
    MasajesComponent,
    ReservaComponent,
    PagoComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule { }
