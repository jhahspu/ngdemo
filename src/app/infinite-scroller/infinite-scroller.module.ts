import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollerComponent } from './infinite-scroller.component';
import { InfiniteScrollerService } from './infinite-scroller.service';
import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    InfiniteScrollerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    InfiniteScrollerService
  ]
})
export class InfiniteScrollerModule { }
