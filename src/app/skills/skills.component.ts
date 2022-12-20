import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillService } from '../service/skill.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skillList: Skill[] = [];

  isLogged: boolean = false;
  constructor(private tokenService: TokenService, private skillService: SkillService){}

  ngOnInit(): void {
    this.loadList();
    this.tokenService.getToken() ? this.isLogged=true : this.isLogged=false;
  }

  loadList(): void{
    this.skillService.list().subscribe(data => this.skillList = data);
  }

 delete(id?: number): void{
    if(id){
      this.skillService.delete(id).subscribe(
        data => {
          this.loadList();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}

