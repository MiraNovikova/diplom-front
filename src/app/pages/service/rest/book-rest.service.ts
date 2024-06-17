import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../../interface/books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookRestService {

  constructor(private http : HttpClient) { }

  getBooks() : Observable<IBook[]> {
    return this.http.get<IBook[]>('https://666eadd0f1e1da2be520dab4.mockapi.io/api/books/list-info')
  }
}
