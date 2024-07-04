import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { PayRoutingModule } from '../pay/pay-routing.module';
import { PayComponent } from '../pay/pay.component';



@NgModule({
  declarations: [
    BookComponent,
    PayComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    ReactiveFormsModule,
    PayRoutingModule
  ]
})
export class BookModule { }
