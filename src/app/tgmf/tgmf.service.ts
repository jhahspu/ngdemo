import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TGMF, TGMFDR } from './tgmf.interface';

const BASE_URL_TGM = `https://tgmback.herokuapp.com`

@Injectable()
export class TgmfService {

  constructor(
    private http: HttpClient
  ) { }

  getRandom(): Observable<TGMF[]> {
    return this.http.get<TGMF[]>(`${BASE_URL_TGM}/random`);
  }

  getDiscover(): Observable<TGMFDR> {
    return this.http.get<TGMFDR>(`${BASE_URL_TGM}/discover`);
  }
}
