import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { IBook, IBookTypeSelect, IInfo } from '../../../interface/books';
import { BookRestService } from '../rest/book-rest.service'
import { IPay } from 'src/app/interface/pay';

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

  getBookById(id: string): Observable<IBook> {
    return this.bookRestService.getBookById(id)
  }

  postBooksInCard(item: IBook): Observable<IBook> {
    return this.bookRestService.postBooksInCard(item)
  }

  getBookInCard(): Observable<IBook[]> {
    return this.bookRestService.getBookInCard()
  }

  getBookTypeObservable(): Observable<IBookTypeSelect> {  //2
    return this.bookSubject.asObservable(); 
   }

   updateBooks(data: IBook[]) {
    this.bookUpdateSubject.next(data);
  }
}
