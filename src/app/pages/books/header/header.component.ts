import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { IUser } from '../../interface/user';
import { IMenuType } from '../../interface/menuType';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menuType: IMenuType;
  items: MenuItem[];

  @Input() test: string = 'initialValue';
  time: Date;

  private  settingsActive = false;
  private timerInterval: number;
  user: IUser | null;



  constructor( private userService : UserService) { }

  
  ngOnInit(): void {
    this.items = this.initMenuItems();

    this.items = [
      {
        label: 'Главная',
        routerLink:['books']
      },
      {
          label: 'Книги',
          routerLink:['books-list']
     
      },
      {
        label: 'Заказать книгу для чтения',
        routerLink:['book-order'],
      },
     
      {
        label: 'Личный кабинет',
        routerLink:['setting'],
      },
      {
        label: 'Выйти',
        routerLink:['/auth']
   
    },
  ];
  this.timerInterval = window.setInterval(() => {
    this.time = new Date();
  }, 1000);

  this.user = this.userService.getUser();
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      window.clearInterval(this.timerInterval)
    }
    if(this.items) {
      window.localStorage.clear()
    }
  }
  ngOnChanges(ev: SimpleChanges): void {
    this.settingsActive = this.menuType?.type === "extended";
    this.items = this.initMenuItems(); 
 }

 initMenuItems(): MenuItem[] {
  return [
    {
      label: 'Главная',
      routerLink:['books']
    },
    {
      label: 'Книги',
      routerLink:['books-list']
    },
    {
      label: 'Заказать книгу для чтения',
      routerLink:['book-order'],
    },
    {
      label: 'Личный кабинет',
      routerLink:['setting'],
    },
    {
      label: 'Выйти',
      routerLink:['/auth']
    },

  ];
}
}
