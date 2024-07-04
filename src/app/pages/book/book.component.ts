import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBook, IInfo } from '../../interface/books';
import { IUser } from '../../interface/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksStorageService } from '../service/books-storage/books-storage.service';
import { UserService } from '../service/user/user.service';
import { BooksService } from '../service/books/books.service';
import { BlocksStyleDirective } from '../../directive/blocks-style.directive';
import { BookRestService } from '../service/rest/book-rest.service';
import { Observable } from 'rxjs';
import { BasketService } from '../service/basket/basket.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: IBook[];
  user: IUser | null;
  bookForm: FormGroup;
  info: IInfo[];
  item: IBook;
  quantity: string | any; 
  login: string;
  psw: string;
  userObj: IUser
 
  @ViewChild('bookWrap', { read: BlocksStyleDirective }) blockDirective: BlocksStyleDirective;

  @ViewChild('bookWrap') bookWrap: ElementRef;

  constructor(private route: ActivatedRoute,
    private bookStorage: BooksStorageService,
    private userService: UserService,
    private booksService: BooksService,
    private bookRestService: BookRestService,
    private basketService: BasketService,
    private  router: Router) { }

  ngOnInit(): void {

  

    const bookId = this.route.snapshot.queryParamMap.get('id');
    this.booksService.getBookById(bookId).subscribe((data) => {
      this.item = data;
    });
  }



  goToPay(ev: Event){
    this.router.navigate(['/books/pay/']);
    if (this.user) {    
      localStorage.setItem('key', JSON.stringify(this.userObj))
    }
    }
  

  goToAuth(ev: Event) {
    this.router.navigate(['/auth/'])
  }

  getBooksById(id: string): Observable<IBook> { 
    return this.booksService.getBookById(id)
  }
}
