import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  isLogged: boolean = false;

  constructor(private tokenService: TokenService){}

  ngOnInit(): void {
    this.tokenService.getToken() ? this.isLogged=true : this.isLogged=false;
  }

  LogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
