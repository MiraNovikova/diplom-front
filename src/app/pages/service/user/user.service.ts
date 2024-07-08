import { Injectable } from '@angular/core';
import { IUser } from '../../../interface/user';
import { BehaviorSubject } from 'rxjs';
import { IBook } from 'src/app/interface/books';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: IUser | undefined;
  private token: string | undefined;
  private userBehSubject = new BehaviorSubject<IUser | null>(null);
  readonly userBehSubject$ = this.userBehSubject.asObservable()
  constructor() { }

  getUser(): IUser {
    return this.user
  }

  setUser(user: IUser) {
    this.user = user;
    this.setToStorage(this.user);
    this.userBehSubject.next(this.user);
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token)
  }

  getToken(): string | undefined {
    if(this.token) {
      return this.token
    } else {
      console.log("error");
      return
    }
}

setToStore(token: string) : void {
  this.token = token;
  localStorage.setItem('token', token)
}

removeUser(): void {
  this.user = null;
  this.token = null;
  window.localStorage.removeItem('userToken') //userToken
  if(this.user) {   // очистка после выхода пользователя
    window.localStorage.clear()
    }
}

updateUser(user: IUser) : void {
  this.user = user;
}

getFormStore(){
  return window.localStorage.getItem('userToken')
}

getAllToken() : string | null {
  if(this.token) {
    return this.token;
  } else {
    return this.getFormStore()
  }
}

clearInfo() {
  this.token = undefined;
  this.user = undefined;
  
}

public setToStorage(user: IUser) : void {
  if(localStorage.getItem('key')) {    // UserStorageName
    localStorage.setItem('key', JSON.stringify(user))
  }
}

public getFormStorage() : IUser | null {
  const userFormStore = localStorage.getItem('key');
  if ('key') {
    return JSON.parse(userFormStore)
  }
  return null
}

}
