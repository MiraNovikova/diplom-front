import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook, IInfo} from '../../../interface/books';
import { Observable } from 'rxjs';
import { IPay } from 'src/app/interface/pay';

@Injectable({
  providedIn: 'root'
})
export class BookRestService {

  sentBookData(type: any): void {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  /*
  getBooks() : Observable<IBook[]> {
    return this.http.get<IBook[]>('https://666eadd0f1e1da2be520dab4.mockapi.io/api/books/list-info')
  }*/


 getBooks() : Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:3000/items',
    {headers: {'Authorization': `Bearer ${'token'}`}}  //тема 2,  Реализовать отправку токена авторизации при переходе по прямой ссылке
    )
  } 

 getBookById(id : string) : Observable<IBook> {
  return this.http.get<IBook>('https://666eadd0f1e1da2be520dab4.mockapi.io/api/books/book-about/' + id)
 
  }
/*
getBookById(_id: string) : Observable<IBook> {
  return this.http.get<IBook>('http://localhost:3000/test'+ _id)


'https://666eadd0f1e1da2be520dab4.mockapi.io/api/books/book-about/'
  }*/

  /*postBooksInCard(item : IBook) : Observable<IBook> {
    return this.http.post<IBook>('http://localhost:4200/books/basket', item)
  }*/

   /* postBooksInCard(item : IBook) : Observable<IBook> {
      return this.http.post<IBook>('http://localhost:3000/order', item)
    }*/

  getBookInCard() : Observable<IBook[]> {
    return this.http.get<IBook[]>('https://666eadd0f1e1da2be520dab4.mockapi.io/api/books/list-info')
    }

    sendOrderData(items: any) : Observable<any> {   
      return this.http.post('http://localhost:3000/order/', items)
    }


    getOrderByUserId(userId : any) : Observable<any> {
      return this.http.get<IBook>('http://localhost:3000/orderd' + userId)
    }
}


/*

 sendBookData(): Observable<any> {
      return this.http.get('http://localhost:3000/basket/')
    


    
      sendPayData(data: IPay) : Observable<any> {   
        return this.http.post('http://localhost:3000/pay/', data)
      }
    
      getOrder() : Observable<IBook[]> {
        return this.http.get<IBook[]>('https://666eadd0f1e1da2be520dab4.mockapi.io/api/books/list-info')
      }


  createBook(body: any): Observable<any> {
      return this.http.post('http://localhost:3000/book-item/', body, {headers: {}})
    }

    getBooksByName(name: string) : Observable<IBook[]> {
      return this.http.get<IBook[]>('http://localhost:3000/book-item/' +name)
    }


*/