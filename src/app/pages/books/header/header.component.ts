import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { IUser } from '../../../interface/user';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {


  @Input() test: string = 'initialValue';
  time: Date;

  private timerInterval: number;
  user: IUser | null;

  constructor(private userService: UserService,
    private router: Router) { }


  ngOnInit(): void {
    this.timerInterval = window.setInterval(() => {
      this.time = new Date();
    }, 1000);
   
    this.user = this.userService.getUser();
    }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      window.clearInterval(this.timerInterval)
    }
  
  }


  
  goToMain(ev: Event): void {
    this.router.navigate(['/books/main/'])
  }
  goToBooksList(ev: Event): void {
    this.router.navigate(['/books/books-list/'])
  }
  goToNews(ev: Event): void {
    this.router.navigate(['/books/news/'])
  }
  goToSetting(ev: Event): void {
    this.router.navigate(['/books/setting/'])
  }
  goToBasket(ev: Event): void {
    this.router.navigate(['/books/basket/'])
  }
  goToExit(ev: Event): void {
    this.router.navigate(['/auth'])
  }

}