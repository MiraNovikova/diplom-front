import { Component, OnInit } from '@angular/core';
import { BasketService } from '../service/basket/basket.service';
import { Subscription } from 'rxjs';
import { IBook } from '../../interface/books';
import { BookRestService } from '../service/rest/book-rest.service';
import { Router } from '@angular/router';
import { IUser } from '../../interface/user';
import { IPay } from 'src/app/interface/pay';
import { HttpClient } from '@angular/common/http';
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
  price: number | string | any;
  id: string;
  login: string;
  psw: string;
  user: IUser | null;
  userObj: IUser;
  saveValue: boolean;
  title: string

  constructor(private basketService: BasketService,
    private bookRestService: BookRestService,
    private router: Router,
  private http: HttpClient) { }

  quantity = 0;
 

  ngOnInit(): void {

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

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 0) {
      this.quantity--
    }
  }

  addToCart(item: IBook) {
    localStorage.setItem('products', JSON.stringify(item))
  }

  goToPay(ev: Event) {
    this.router.navigate(['/books/pay/']);
    if (this.saveValue) {
      localStorage.setItem('key', JSON.stringify(this.userObj))
    }
  }

  goToAuth(ev: Event) {
    this.router.navigate(['/auth/'])
  }


  totalPrice() {
  }

  sendOrder(ev:Event) :void | boolean {
   
  }
}