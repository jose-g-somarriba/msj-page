import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import {ComponentsRoutingModule} from '../pages/components/components-routing.module'
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule

  ],
  exports:
  [
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
