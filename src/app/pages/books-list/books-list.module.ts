import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list.component';
import { BooksListRoutingModule } from './books-list-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { BlocksStyleDirective } from '../../directive/blocks-style.directive';
import { MessagesModule } from 'primeng/messages';



@NgModule({
  declarations: [
    BooksListComponent,
    BlocksStyleDirective
  ],
  imports: [
    CommonModule,
    BooksListRoutingModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    MessagesModule
  ]
})
export class BooksListModule { }
