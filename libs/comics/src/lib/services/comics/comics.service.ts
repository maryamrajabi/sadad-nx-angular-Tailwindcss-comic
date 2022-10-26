import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comic } from '@demo/data-models';
import { Observable } from 'rxjs';
import { getApiHash } from 'marvel-api-hash-generator';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private httpClient: HttpClient) {
  }

  getComics(category?: any): Observable<any> {
    const limit = 5;
    const timeStamp = 1;
    const orderBy = '-modified';
    const privateKey = 'f00f8f0c98c5da585396bae82c1487f57a812148';
    const publicKey = 'ff489ffdb69322ff925c04feeb5efd04';
    const hashValue = getApiHash(timeStamp, privateKey, publicKey);
    const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/comics?';
    const exampleUrl = `${requestConstantCharacters}limit=${limit}&orderBy=${orderBy}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
    return this.httpClient.get<Comic[]>(exampleUrl);
  }

}
