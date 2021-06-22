import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsArticle } from './news.interface';

const BASE_URL = `https://api.hackerwebapp.com`

@Injectable()
export class InfiniteScrollerService {

  constructor(
    private http: HttpClient
  ) { }

  getStories(page: number = 1): Observable<NewsArticle[]> {
    return this.http.get<NewsArticle[]>(`${BASE_URL}/news?page=${page}`)
  }
}
