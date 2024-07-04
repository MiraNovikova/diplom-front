import { Injectable } from '@angular/core';
import { IBook } from '../../../interface/books';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basketUpdateSubject = new Subject<IBook[]>();
  readonly basketUpdateSubject$ = this.basketUpdateSubject.asObservable();

  constructor() { }

  products: IBook[] = [];

  addToCart(item: IBook) {
    this.products.push(item);
    localStorage.setItem('products', JSON.stringify(this.products))
  }

  getItems(): IBook[] {
    return this.products;
  }

  clearCart() {
    this.products = [];
  }

  removeFromCart(product: IBook): void {
    this.products = this.products.filter(item => item !== product);
  }

}