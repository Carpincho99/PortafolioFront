import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { EducService } from '../service/educ.service';
import { Educ } from '../models/educ';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  isLogged: boolean = false;
  fetchError: boolean = false;
  educList: Educ[] = [];

  constructor(private tokenService: TokenService, private educServ: EducService){}

  ngOnInit(): void {
    this.loadList();
    this.tokenService.getToken() ? this.isLogged=true : this.isLogged=false;
  }

  loadList(): void{
    this.educServ.list().subscribe(
      data => {
        this.educList = data;
        this.fetchError = false;
      }, err => {
      this.fetchError = true;
    });
  }

  delete(id?: number): void{
    if(id){
      this.educServ.delete(id).subscribe(
        data => {
          this.loadList();
        }, err => {
          alert("No se pudo borrar la educación");
        }
      )
    }
  }


}
