import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IBook } from '../interface/books';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
import { BooksService } from '../service/books/books.service';
import { Router } from '@angular/router';
import { BooksStorageService } from '../service/books-storage/books-storage.service';
import { BlocksStyleDirective } from '../directive/blocks-style.directive';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, OnDestroy {

  books: IBook[];
  bookCopy: IBook[] = [];
  filterText: string = '';
  booksDouble: IBook[];
  loadCountBlock = false;
  defaultDate: string;

  @ViewChild('bookWrap', { read: BlocksStyleDirective }) blockDirective: BlocksStyleDirective;

  @ViewChild('bookWrap') bookWrap: ElementRef;
 
   bookUnsubscriber: Subscription;   //3.1

  @ViewChild('bookSearch') bookSearch: ElementRef;

  searchBookSub: Subscription;
  bookSearchValue: string;
  constructor(private booksService: BooksService,
    private router: Router,
    private bookStorage: BooksStorageService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe( 
      (data: IBook[]) => {
        this.books = data;
        if (Array.isArray(data)) {
          this.bookCopy = [...data];
          this.booksDouble = [...this.books]
        }
    
        this.bookStorage.setStorage(data);
      }
    )

      //update
    //  this.booksService.bookUpdateSubject$.subscribe((data) => {
     //   this.books = data
      //})
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
  
      const fromEventObserver = fromEvent(this.bookSearch.nativeElement, 'keyup', {passive: true})
        this.searchBookSub = fromEventObserver.pipe(
          debounceTime(200)).subscribe((ev: any) => {
            if(this.bookSearchValue) {
              this.books = this.bookCopy.filter((el: IBook) => el.title.toLowerCase().includes(this.bookSearchValue.toLowerCase()));
            } else {
              this.books = [...this.bookCopy];
            }
          })
    }

    ngOnDestroy() {
      //this.tourUnsubscriber.unsubscribe();
      //this.searchTicketSub.unsubscribe()
    }
    
      goToBookInfoPage(item: IBook) { 
        this.router.navigate(['/books/book/'], 
          //{ queryParams: {id: item.id}}   //item._id
          );
      }
      
      directiveRenderComplete(ev: boolean) {
    
        //console.log('xxx', ev)
        this.bookWrap;
        this.blockDirective.initStyle(0)
      }
    
    }

