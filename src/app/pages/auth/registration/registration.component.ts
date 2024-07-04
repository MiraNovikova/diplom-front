import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../interface/user';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../service/auth/auth.service';
import { ServerError } from '../../../interface/error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  login: string;
  psw: string;
  pswRepeat: string;
  email: string;
  cardNumber: string;
  saveValue: boolean;
  saveUserInStore: boolean;
  messages: any;

  constructor(private messageService : MessageService,
              private authService : AuthService,
              private http: HttpClient){ }    

  ngOnInit(): void {
   
  }
  
  saveSelected() : void {
  }

  onAuth(ev: Event) : void{
    const authUser : IUser = {
      psw: this.psw,
      login: this.login
    }

    
    if (this.authService.checkUser(authUser)) {
      console.log('auth true');
    }
    else {
      console.log('auth false');
    }
  }

  registration(ev: Event) : void | boolean {
   if (this.psw !==  this.pswRepeat) {
      this.messageService.add({severity:'error', summary:'Пароли не совпадают'});
    return false
    }


    const userObj: IUser = {
      psw: this.psw,
      login: this.login,
      email: this.email
    }

    if (this.saveValue) {    
      localStorage.setItem('key', JSON.stringify(userObj))
    }

  this.http.post<IUser>('http://localhost:3000/users/', userObj).subscribe((data) => {
      if (this.saveUserInStore) {
        const objUserJsonStr = JSON.stringify(userObj);
        //window.localStorage.setItem('user_'+userObj.login, objUserJsonStr);
        window.localStorage.setItem('key', objUserJsonStr);
      }
      this.messageService.add({severity:'success', summary:'Регистрация прошла успешно'});
 
    }, (err: HttpErrorResponse)=> {
      console.log('err', err);
      const serverError = <ServerError>err.error
      this.messageService.add({severity:'warn', summary: serverError.errorText});
    });
 
}
}