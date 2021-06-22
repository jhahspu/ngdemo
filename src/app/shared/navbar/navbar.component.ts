import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngdemo-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    document.querySelectorAll('.nav-link').forEach(el => {
      el.addEventListener('click', () => {
        document.querySelector('.menu')?.classList.toggle('open');
        document.querySelector('.nav')?.classList.toggle('closed');
      })
    })
  }

  toggleMenu(): void {
    document.querySelector('.menu')?.classList.toggle('open');
    document.querySelector('.nav')?.classList.toggle('closed');
  }


}
