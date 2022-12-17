import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginUser } from '../models/login-user';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';

declare var $ : any;
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUser;
  nombreUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;
  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUser(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        $('#loginModal').modal('hide'); 
        this.loginSuccess.emit();
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      })
  }
}
