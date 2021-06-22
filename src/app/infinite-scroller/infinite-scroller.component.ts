import { AfterViewInit, Component } from '@angular/core';
import { InfiniteScrollerService } from './infinite-scroller.service';
import { NewsArticle } from './news.interface';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-infinite-scroller',
  templateUrl: './infinite-scroller.component.html',
  styles: [
  ]
})
export class InfiniteScrollerComponent implements AfterViewInit {

  array: NewsArticle[] = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  page = 1;

  constructor(
    private serv: InfiniteScrollerService
  ) { }

  ngAfterViewInit(): void {
    this.getArticles()
  }

  getArticles(): void {
    this.serv.getStories(this.page)
    .pipe(take(1))
    .subscribe(
      (res: NewsArticle[]) => {
        res.forEach(el => {
          this.array.push(el)
        })
      }
    )
  }

  onScrollDown() {
    // console.log('scrolled down')
    this.page++;
    this.getArticles()
  }

}
