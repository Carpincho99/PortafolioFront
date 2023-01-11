import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../models/login-user';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';

declare var jQuery:any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  isLogged = false;
  isLoging = false;
  isLogginFail = false;
  loginUsuario!: LoginUser;
  nombreUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;
  constructor(private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.isLoging = true;
    this.loginUsuario = new LoginUser(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.isLoging = false;
        window.location.reload();
      }, err =>{
        this.isLogged = false;
        this.isLoging = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        alert("Error al iniciar seción");
        $('#loginModal').modal('hide');
        $('#loginModal').on('hidden.bs.modal', function () {
          $('#loginModal').find('form').trigger('reset');
        })

      })
  }
}
