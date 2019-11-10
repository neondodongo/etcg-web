import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURI: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getCards() {
    return this.httpClient.get<Card[]>(`${this.apiURI}/cards/get?setCode=sm8`);
  }
}
