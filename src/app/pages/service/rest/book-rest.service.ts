import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook, IInfo} from '../../../interface/books';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class BookRestService {

  sentBookData(type: any): void {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient,
    private userService : UserService) { }


 getBooks() : Observable<IBook[]> {
  const token = this.userService.getToken()
    return this.http.get<IBook[]>('http://localhost:3000/items',
     {headers: {'Authorization': `Bearer ${'token'}`}},
     
    )
  } 

 getBookById(id : string) : Observable<IBook> {
  return this.http.get<IBook>('https://666eadd0f1e1da2be520dab4.mockapi.io/api/books/book-about/' + id)
 
  }


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


