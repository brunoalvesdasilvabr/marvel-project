import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HeroesHttpResponse } from 'src/app/data/interface/heroes.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get<HeroesHttpResponse>(`${environment.marvelapi}:443/v1/public/characters`).pipe(
      map((res)=>{
return res
      })
    )
  }
}
