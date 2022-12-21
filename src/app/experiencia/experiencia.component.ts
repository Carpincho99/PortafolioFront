import { Component, OnInit } from '@angular/core';
import { Exp } from '../models/exp';
import { ExpService } from '../service/exp.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  isLogged: boolean = false;
  isEditing: boolean = false;

  expList: Exp[] = [];

  exp!: Exp;
  modExpId: number = 0;
  modExpName: string = "";
  modExpPuesto: string = "";
  modExpDescrip: string = "";

  constructor(private tokenService: TokenService, private expServ: ExpService){}

  ngOnInit(): void {
    this.loadExpList();
    this.tokenService.getToken() ? this.isLogged=true : this.isLogged=false;
  }

  loadExpList(): void{
    this.expServ.list().subscribe(data => this.expList = data);
  }

  editing(name:string, puesto:string, descrip:string, id?:number): void{
    if(id){
      this.isEditing=true;
      this.modExpId = id;
      this.modExpName = name;
      this.modExpPuesto = puesto;
      this.modExpDescrip = descrip;
    }
  }

  modExp(): void{
    if(this.modExpId){
      this.exp = new Exp(this.modExpName, this.modExpDescrip, this.modExpPuesto);
      this.expServ.mod(this.modExpId, this.exp).subscribe(data => {
      this.modExpId = 0;
      this.ngOnInit()
      this.isEditing = false;
      }, err =>{

        })
    }
  }

  delete(id?: number): void{
    if(id){
      this.expServ.delete(id).subscribe(
        data => {
          this.loadExpList();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
