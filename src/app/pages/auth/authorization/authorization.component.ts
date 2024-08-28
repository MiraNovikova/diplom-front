import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../../interface/user';
import { AuthService } from '../../service/auth/auth.service';
import { MessageService } from 'primeng/api';
import { UserService } from '../../service/user/user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ServerError } from '../../../interface/error';


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

  constructor(private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {


    this.authTextButton = "Авторизация";

  }

  ngOnDestroy(): void {
    console.log('auth')
  }

  onAuth(ev: Event): void {
    const authUser: IUser = {
      psw: this.psw,
      login: this.login
    }

    this.http.post<{ access_token: string, id: string }>('http://localhost:3000/users/' + authUser.login, authUser).subscribe((data) => {
      authUser.id = data?.id;
      this.userService.setUser(authUser);
      //const token: string = 'user-private-token'+data.id;
      const token: string = data.access_token;
      this.userService.setToken(token);
      this.userService.setToStore(token);

      const pathToRedirect = this.authService.getPathToRedirect();
      if (pathToRedirect.includes('basket')) {
        this.router.navigate(['books/basket/']);
      } else {
        this.router.navigate(['books/main/']);
      }

    }, (err: HttpErrorResponse) => {
      const serverError = <ServerError>err.error;
      this.messageService.add({ severity: 'warn', summary: serverError.errorText });
    });


  }


}