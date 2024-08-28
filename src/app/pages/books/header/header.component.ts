import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { IUser } from '../../../interface/user';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { style } from '@angular/animations';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {


  @Input() test: string = 'initialValue';
  time: Date;
  menuItems: any[] = [];
  private timerInterval: number;
  user: IUser | null;
  showBtn: boolean;
  token: string;


  constructor(private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.timerInterval = window.setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.user = this.userService.getUser();

    if (this.user?.login) {
      this.showBtn = true;
    }
    if (!this.user?.login) {
      this.showBtn = false;
    }

    this.initMenuItems();


  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      window.clearInterval(this.timerInterval)
    }

  }
  initMenuItems(): void {
    this.menuItems = [
      {
        label: 'Главная',
        type: 'main'
      },
      {
        label: 'Книги',
        type: 'books'
      },
      {
        label: 'Новости и акции',
        type: 'news'
      },
      {
        label: 'Личный кабинет',
        type: 'setting',
        hidden: !this.user
      },
      {
        label: 'Корзина',
        type: 'basket'
      },

      {
        label: 'Войти',
        type: 'auth',
        hidden: !!this.user
      },
      {
        label: 'Выйти',
        type: 'exit',
        hidden: !this.user
      }
    ]
  }
  menuClik(ev: Event, type: string): void {
    switch (type) {
      case 'main':
        this.router.navigate(['/books/main/']);
        break;
      case 'books':
        this.router.navigate(['/books/books-list/']);
        break;
      case 'news':
        this.router.navigate(['/books/news/']);
        break;
      case 'setting':
        this.router.navigate(['/books/setting/']);
        break;
      case 'basket':
        this.router.navigate(['/books/basket/']);
        break;
      case 'auth':
        const currentRoute = this.router.url;
        this.authService.setPathToRedirect(currentRoute);
        this.router.navigate(['/auth']);
        break;
      case 'exit':
        this.userService.removeUser();
        this.user = null;
        this.initMenuItems();
        this.router.navigate(['/books/main/']);
        localStorage.clear();
        break;

    }
  }


}