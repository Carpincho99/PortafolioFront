import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../models/new-user';
import { LoginUser } from '../models/login-user';
import { JwtDto } from '../models/jwt-dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public nuevoUsuario(newUser: NewUser): Observable<any>{
    return this.http.post<any>(environment.apiUrl + "auth/nuevo", newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.http.post<JwtDto>(environment.apiUrl + "auth/login", loginUser);
  }
}
