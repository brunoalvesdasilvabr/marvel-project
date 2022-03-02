import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get(`${environment.marvelapi}:443/v1/public/characters`)
  }
}
