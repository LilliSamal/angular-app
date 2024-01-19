import { LOCALSTORAGE_TOKEN_KEY } from './../../app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../../interfaces';



export const fakeRegisterResponse: RegisterResponse = {
  status: 200,
  message: 'Registration sucessfull.'
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    //private snackbar: MatSnackBar,
    //private jwtService: JwtHelperService
  ) { } 


  public getStatus() : Observable<any[]> {
    return this.http.get<any[]>(`https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d`);
  }
  public getUserData() : Observable<any[]> {
    
    return this.http.get<any[]>(`https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2`);
  }
}
