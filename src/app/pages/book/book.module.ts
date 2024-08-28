import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';




@NgModule({
  declarations: [
    BookComponent,
  
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    ReactiveFormsModule,

  ]
})
export class BookModule { }
