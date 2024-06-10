import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import {ToastModule} from  'primeng/toast';
import {MenubarModule} from 'primeng/menubar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BooksListComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    InputTextModule,
    ToastModule,
    BooksRoutingModule

  ]
})
export class BooksModule { }
