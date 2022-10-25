import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comic } from '@demo/data-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private httpClient: HttpClient) {}

  getComics(category?: any): Observable<Comic[]> {
    return this.httpClient.get<Comic[]>('http://localhost:3000/comics');
  }

}
