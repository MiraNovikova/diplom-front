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
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksListRoutingModule } from '../books-list/books-list-routing.module';
import { BookOrderRoutingModule } from '../book-order/book-order-routing.module';
import { MainComponent } from './main/main.component';
import {CarouselModule} from 'primeng/carousel';
import { ImageModule } from 'primeng/image'; 
import { BlocksStyleDirective } from '../directive/blocks-style.directive';






@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    MainComponent,
    BlocksStyleDirective
  ],
  imports: [
    CommonModule,
    MenubarModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    InputTextModule,
    ToastModule,
    BooksRoutingModule,
    BooksListRoutingModule,
    BookOrderRoutingModule,
    CarouselModule,
    ImageModule
  ]
})
export class BooksModule { }
