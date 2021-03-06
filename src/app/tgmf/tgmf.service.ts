import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TGMF, TGMFResponse } from './tgmf.interface';

const BASE_URL_TGM = `https://tgmback.herokuapp.com`

@Injectable()
export class TgmfService {

  constructor(
    private http: HttpClient
  ) { }

  getRandom(): Observable<TGMF[]> {
    return this.http.get<TGMF[]>(`${BASE_URL_TGM}/random`);
  }

  getDiscover(): Observable<TGMFResponse> {
    return this.http.get<TGMFResponse>(`${BASE_URL_TGM}/discover`);
  }

  getDetails(id: string): Observable<TGMF> {
    return this.http.get<TGMF>(`${BASE_URL_TGM}/details/${id}`);
  }

  getTrailers(id: string): Observable<any> {
    return this.http.get<TGMF>(`${BASE_URL_TGM}/trailers/${id}`);
  }
}
