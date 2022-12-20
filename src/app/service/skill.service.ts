import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url = "http://localhost:8080/skill"

  constructor(private http: HttpClient) { }

  public list(): Observable<Skill[]>{
   return this.http.get<Skill[]>(this.url + "/list");
  }

  public save(exp: Skill): Observable<any>{
    return this.http.post<any>(this.url + "/create", exp);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }


}
