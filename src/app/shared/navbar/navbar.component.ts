import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngdemo-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {


  toggleMenu(): void {
    document.querySelector('.menu')?.classList.toggle('open');
    document.querySelector('.nav')?.classList.toggle('closed');
  }


}
