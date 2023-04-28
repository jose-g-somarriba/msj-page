import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleMenu = false;

  menuHamgur () {
    this.toggleMenu = !this.toggleMenu
    console.log('menu hamburguesa')
  }

}
