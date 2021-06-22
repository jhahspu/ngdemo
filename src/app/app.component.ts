import { Component } from '@angular/core';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  template: `
    <ngdemo-loader *ngIf="loading$ | async"></ngdemo-loader>
    <div class="wrapper">
      <ngdemo-navbar></ngdemo-navbar>

      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AppComponent {

  loading$ = this.loader.loading$;

  constructor(
    private loader: LoaderService
  ) {}
}
