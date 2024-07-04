import { Injectable } from '@angular/core';
import { IUser } from '../../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private usersStorage: IUser[] = [];

  constructor() { }

  checkUser(user: IUser): boolean {
  
    const isUserExists = this.usersStorage.find((el) => el.login === user.login);
    let isUserSavedInStore: string | null = window.localStorage.getItem('key');
    let userInStore: IUser = <IUser>{};

    if (isUserSavedInStore) {
   
    userInStore = JSON.parse(isUserSavedInStore);

    }

    if (isUserExists) {
      return isUserExists.psw === user.psw;
    }
    else if (userInStore?.login) {
      return userInStore.psw === user.psw;
    }
    return false; 
  }

  setUser(user: IUser): void {
    const isUserExists = this.usersStorage.find((el) => el.login === user.login);
    if (!isUserExists && user?.login) {
      this.usersStorage.push(user)
    }
  }


  isUserExsists(user: IUser): boolean {
    const isUserExists = this.usersStorage.find((el) => el.login === user.login);
    return !!isUserExists
  }

  logout() {
    localStorage.removeItem('isUserSavedInStore');
  }
}
