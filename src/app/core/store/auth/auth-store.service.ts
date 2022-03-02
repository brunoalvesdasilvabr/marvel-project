import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { StorageKeys } from 'src/app/core/constants/storageKeys.enum';
import { LoginResponseInterface } from 'src/app/data/interface/login-response.interface';
import { StorageService } from 'src/app/shared/services/storage/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  private readonly _token = new Subject<LoginResponseInterface>()
private _token$ = this._token.asObservable()
  constructor(private storageService:StorageService) { }


  setToken(token:LoginResponseInterface){
    this.token = token;
   

  }

  private set token(token:LoginResponseInterface){
    this._token.next(token);
    this.storageService.set(StorageKeys.token,token)
  }

  public  getToken():LoginResponseInterface | void{
    const tokenStorage = this.storageService.get(StorageKeys.token)
    if(tokenStorage){
      console.log('storage')
      return tokenStorage
    }
  }
}



