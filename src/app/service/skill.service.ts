import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Skill[]>{
   return this.http.get<Skill[]>(environment.apiUrl + "skill/list");
  }

  public save(exp: Skill): Observable<any>{
    return this.http.post<any>(environment.apiUrl + "skill/create", exp);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(environment.apiUrl + `skill/delete/${id}`);
  }


}
