import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exp } from '../models/exp';

@Injectable({
  providedIn: 'root'
})
export class ExpService {
  url = "http://localhost:8080/exp"

  constructor(private http: HttpClient) { }

  public list(): Observable<Exp[]>{
   return this.http.get<Exp[]>(this.url + "/list");
  }

  public save(exp: Exp): Observable<any>{
    return this.http.post<any>(this.url + "/create", exp);
  }

  public mod(id: number, exp: Exp): Observable<any>{
    return this.http.put<any>(this.url + `/mod/${id}`, exp)
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }


}
