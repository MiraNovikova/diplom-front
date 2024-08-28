import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { IBook, IBookTypeSelect, IInfo } from '../../../interface/books';
import { BookRestService } from '../rest/book-rest.service'


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private randomEndpoins = ['bookList1.json'];

  private bookSubject = new Subject<IBookTypeSelect>();

  private bookUpdateSubject = new Subject<IBook[]>();
  readonly bookUpdateSubject$ = this.bookUpdateSubject.asObservable();

  constructor(private bookRestService: BookRestService) { }

  getBooks(): Observable<IBook[]> {
    return this.bookRestService.getBooks();
  }

  getBookById(id: string) {
    return this.bookRestService.getBookById(id)
  }

 
  getBookInCard(): Observable<IBook[]> {
    return this.bookRestService.getBookInCard()
  }

  getBookTypeObservable(): Observable<IBookTypeSelect> {  
    return this.bookSubject.asObservable();
  }

  updateBooks(data: IBook[]) {
    this.bookUpdateSubject.next(data);
  }

  //передача заказа на сервер
  sendOrderData(items: any) {
    return this.bookRestService.sendOrderData(items)
  }

  getOrderByUserId(userId: any): Observable<any> {
    return this.bookRestService.getOrderByUserId(userId)
  }

}