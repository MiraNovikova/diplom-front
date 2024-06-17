import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list.component';
import { BooksListRoutingModule } from './books-list-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { BookRoutingModule } from '../book/book-routing.module';




@NgModule({
  declarations: [
    BooksListComponent
  ],
  imports: [
    CommonModule,
    BooksListRoutingModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ToastModule
  ]
})
export class BooksListModule { }
