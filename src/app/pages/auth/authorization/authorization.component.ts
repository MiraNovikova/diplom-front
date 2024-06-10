import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../interface/user';
import { AuthService } from '../../service/auth/auth.service';
import { MessageService } from 'primeng/api';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnInit {

  loginText = "Логин";
  pswText = "Пароль";
  psw: string;
  login: string;
  authTextButton: string;
  user: IUser;
 
  constructor(private authService : AuthService,
              private messageService : MessageService,
              private router : Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    this.authTextButton = "Авторизация";
  }

  ngOnDestroy(): void {
    console.log('auth')
  }

  vipStatusSelected() : void {

  }

  onAuth(ev: Event) : void{
    const authUser : IUser = {
      psw: this.psw,
      login: this.login
    }
    
    if (this.authService.checkUser(authUser)) {
      this.userService.setUser(authUser);

      //this.userService.setToken('user-private-token');
      
      this.router.navigate(['books']);
      
    }
    else {
      this.messageService.add({severity:'error', summary:'Проверьте введеные данные'});
    }
}

}