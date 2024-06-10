import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BooksListItemComponent } from './books-list-item.component';
import { BookListItemRoutingModule } from './book-list-item-routing.module';



@NgModule({
  declarations: [
    BookComponent,
    BooksListItemComponent
  ],
  imports: [
    CommonModule,
    BookListItemRoutingModule
  ],
  exports: [
    BookComponent
  ]
})
export class BookListItemModule { }
