import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { MdParserModule } from './md-parser/md-parser.module';
import { InfiniteScrollerModule } from './infinite-scroller/infinite-scroller.module';
import { LoaderComponent } from './shared/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './interceptors/network.interceptor';
import { GlideModule } from './glide/glide.module';
import { TgmfModule } from './tgmf/tgmf.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdParserModule,
    InfiniteScrollerModule,
    GlideModule,
    TgmfModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
