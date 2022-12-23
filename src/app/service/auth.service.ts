import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../models/new-user';
import { LoginUser } from '../models/login-user';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = "https://portfoliobackendspring-production.up.railway.app/auth"

  constructor(private http: HttpClient) { }

  public nuevoUsuario(newUser: NewUser): Observable<any>{
    return this.http.post<any>(this.authUrl + "/nuevo", newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.http.post<JwtDto>(this.authUrl + "/login", loginUser);
  }
}
