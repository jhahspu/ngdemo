import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { MdParserModule } from './md-parser/md-parser.module';
import { InfiniteScrollerModule } from './infinite-scroller/infinite-scroller.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdParserModule,
    InfiniteScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
