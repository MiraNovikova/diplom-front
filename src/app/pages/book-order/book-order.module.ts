import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookOrderComponent } from './book-order.component';
import { BookOrderRoutingModule } from './book-order-routing.module';



@NgModule({
  declarations: [
    BookOrderComponent
  ],
  imports: [
    CommonModule,
    BookOrderRoutingModule
  ]
})
export class BookOrderModule { }
