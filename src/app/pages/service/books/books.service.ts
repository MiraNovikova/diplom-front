import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../../interface/books';
import {BookRestService} from '../rest/book-rest.service'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private bookRestService : BookRestService) { }

  getBooks(): Observable<IBook[]> {
    return this.bookRestService.getBooks()
}

}
