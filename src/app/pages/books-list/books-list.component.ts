import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IBook, IBookTypeSelect} from '../../interface/books';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
import { BooksService } from '../service/books/books.service';
import { Router } from '@angular/router';
import { BooksStorageService } from '../service/books-storage/books-storage.service';
import { BlocksStyleDirective } from '../../directive/blocks-style.directive';
import { BookRestService } from '../service/rest/book-rest.service';
import { BasketService } from '../service/basket/basket.service';
import { ORDERMOCK } from '../../shared/orders';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: IBook[] = [];
  bookCopy: IBook[] = [];
  filterText: string = '';
  booksDouble: IBook[];
  loadCountBlock = false;
  defaultDate: string;
  login: string;
  psw: string;
  


  @ViewChild('bookWrap', { read: BlocksStyleDirective }) blockDirective: BlocksStyleDirective;

  @ViewChild('bookWrap') bookWrap: ElementRef;

  bookUnsubscriber: Subscription;   //3.1

  @ViewChild('bookSearch') bookSearch: ElementRef;

  searchBookSub: Subscription;
  bookSearchValue: string;


  constructor(private booksService: BooksService,
    private router: Router,
    private bookStorage: BooksStorageService,
    private bookRestService: BookRestService,
    private basketService: BasketService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(
      (data: IBook[]) => {
        this.books = data;
        if (Array.isArray(data)) {
          this.bookCopy = [...data];
        }

        this.bookStorage.setStorage(data);
      }
    )
    this.bookUnsubscriber = this.booksService.getBookTypeObservable().subscribe((data: IBookTypeSelect) => { console.log('data', data) });
  }

  //поиск 
  searchTour(): void {

    if (!this.filterText) {
      this.books = [...this.bookCopy];
    } else {
      this.books = this.bookCopy.filter((book) => {
        return book.title.toLowerCase().includes(this.filterText.toLowerCase())
      });
    }
  }

  ngAfterViewInit() {

    const fromEventObserver = fromEvent(this.bookSearch.nativeElement, 'keyup', { passive: true })
    this.searchBookSub = fromEventObserver.pipe(
      debounceTime(200)).subscribe((ev: any) => {
        if (this.bookSearchValue) {
          this.books = this.bookCopy.filter((el: IBook) => el.title.toLowerCase().includes(this.bookSearchValue.toLowerCase()));
        } else {
          this.books = [...this.bookCopy];
        }
      })

    this.booksService.bookUpdateSubject$.subscribe((data) => {
      this.books = data
    })
  }

  /* ngOnDestroy() {
     this.bookUnsubscriber.unsubscribe();
     this.searchBookSub.unsubscribe()
   }*/

  goToBookInfoPage(item: IBook) {
    this.router.navigate(['/books/book'],
      { queryParams: { id: item.id } }
    );
  }


  directiveRenderComplete(ev: boolean) {

    //console.log('xxx', ev)
    this.bookWrap;
    this.blockDirective.initStyle(0)
  }


  goToBasket(book: IBook[]) {
    this.router.navigate(['/books/basket'])
    // { queryParams: {id: book}}
  }

  addToCart(item: IBook): void {
    this.basketService.addToCart(item);
    console.log(item)

  }



  sortPriceInc(): void {
    this.books = this.books.sort((a, b) => a.price - b.price);
  }

  sortPriceDec() {
    this.books = this.books.sort((a, b) => b.price - a.price);
  }

  removePrice() {
    this.books = undefined;
  }



}