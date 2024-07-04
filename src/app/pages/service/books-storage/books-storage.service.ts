import { Injectable } from '@angular/core';
import { IBook } from '../../../interface/books';

@Injectable({
  providedIn: 'root'
})
export class BooksStorageService {
  private bookStorage: IBook[];
  constructor() { }

  setStorage(data: IBook[]): void {
  this.bookStorage = data;
  
 
   }
   getStorage(): IBook[] {
     return this.bookStorage
    }

  
}
