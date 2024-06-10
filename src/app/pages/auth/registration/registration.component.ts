import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interface/user';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../service/auth/auth.service';

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
 
  constructor(private messageService : MessageService,
              private authService : AuthService){ }    

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
  
    if (!this.authService.isUserExsists(userObj)) {
      this.authService.setUser(userObj);
      this.messageService.add({severity:'success', summary:'Регистрация прошла успешно'});
    } if (this.saveValue) {    
      localStorage.setItem('key', JSON.stringify(userObj))
    }
    else {
      this.messageService.add({severity:'warn', summary:'Пользователь уже зарегистрирован'});
    }

}
}