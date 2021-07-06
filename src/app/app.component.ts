import { Component } from '@angular/core';
import { LoaderService } from './shared/loader.service';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  template: `
    <ngdemo-loader *ngIf="loading$ | async"></ngdemo-loader>

    <div class="wrapper">

      <ngdemo-navbar></ngdemo-navbar>

      <main [@routeAnimations]="prepareRoute(outlet)">

        <router-outlet #outlet="outlet"></router-outlet>
        
      </main>

    </div>
  `,
  animations: [
    fader
  ]
})
export class AppComponent {

  loading$ = this.loader.loading$;

  constructor(
    private loader: LoaderService
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
