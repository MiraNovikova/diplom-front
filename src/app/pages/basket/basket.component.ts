import { Component, OnInit } from '@angular/core';
import { BasketService } from '../service/basket/basket.service';
import { Subscription } from 'rxjs';
import { IBook, IInfo } from '../../interface/books';
import { BookRestService } from '../service/rest/book-rest.service';
import { Router } from '@angular/router';
import { IUser } from '../../interface/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user/user.service';
import { BooksService } from '../service/books/books.service';
//import { IBook } from '../interface/books';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket: IBook[] = [];
  basketSubscription: Subscription;
  book: IBook[];
  price: number;
  id: string;
  login: string;
  psw: string;
  user: IUser | null;
  userObj: IUser;
  saveValue: boolean;
  title: string;
  //quantity: number;
  //isDisabled: boolean;
  showBtn: boolean;
  

  constructor(private basketService: BasketService,
    private bookRestService: BookRestService,
    private router: Router,
    private http: HttpClient,
    private userService: UserService,
    private booksService: BooksService, 
    ) { }

//quantity = 0;

  ngOnInit(): void {

    this.user = this.userService.getUser();
    //localStorage.setItem('key', JSON.stringify(this.userObj))
    localStorage.getItem('key')
    if(this.user.login){
      this.showBtn = true;
    }
    if(!this.user.login){
      this.showBtn = false;
    }
    
  }

  items = this.basketService.getItems();


  remove(item: IBook) {
    this.items = [];
    return this.items;
  }

  clearCart(): void {
    //const firstItem = this.items.shift()
     const lastItem = this.items.pop();
   
    }

  addToCart(item: IBook) {
    localStorage.setItem('products', JSON.stringify(item))
  }

  goToPay(ev: Event) {
    this.router.navigate(['/books/pay/']);

  }

  goToAuth(ev: Event) {
    this.router.navigate(['/auth/'])
  }

  increase(item: IBook) {
    item.quantity++
  }

  decrease(item: IBook) {
    if (item.quantity > 0) {
      item.quantity--
    }
  }

  //передача данных на сервер
  sendOrder(ev: Event)  : void {



    const booksData = [...this.items];
 
    const postData = {
      user: this.userService.getUser()?.id,
      items: booksData
    }
      this.booksService.sendOrderData(postData).subscribe((data) => {
        console.log(data)
      })
    
  }

}

