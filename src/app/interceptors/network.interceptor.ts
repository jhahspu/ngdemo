import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { LoaderService } from '../shared/loader.service';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(
    private loader: LoaderService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler): Observable<HttpEvent<unknown>> {
      this.loader.show();
      return next.handle(request).pipe(
        delay(500),
        finalize(() => this.loader.hide())
      );
  }
}
