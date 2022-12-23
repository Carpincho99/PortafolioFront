import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educ } from '../models/educ';

@Injectable({
  providedIn: 'root'
})
export class EducService {
  url = "https://portfoliobackendspring-production.up.railway.app/educ"

  constructor(private http: HttpClient) { }

  public list(): Observable<Educ[]>{
   return this.http.get<Educ[]>(this.url + "/list");
  }

  public save(educ: Educ): Observable<any>{
    return this.http.post<any>(this.url + "/create", educ);
  }

  public mod(id: number, educ: Educ): Observable<any>{
    return this.http.put<any>(this.url + `/mod/${id}`, educ);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }

}
