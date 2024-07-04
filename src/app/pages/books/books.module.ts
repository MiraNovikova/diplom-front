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
import { NewsRoutingModule } from '../news/news-routing.module';
import { MainComponent } from './main/main.component';
import {CarouselModule} from 'primeng/carousel';
import { ImageModule } from 'primeng/image'; 
import { ButtonModule } from 'primeng/button';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    MainComponent
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
    NewsRoutingModule,
    CarouselModule,
    ImageModule,
    ButtonModule
  ]
})
export class BooksModule { }
