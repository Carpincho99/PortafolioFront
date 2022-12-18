import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  isLogged: boolean = false;

  constructor(private tokenService: TokenService){}

  ngOnInit(): void {
    this.tokenService.getToken() ? this.isLogged=true : this.isLogged=false;
  }

}
