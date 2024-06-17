import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookOrderComponent } from './book-order.component';


const routes: Routes = [
  { path: '', 
  component: BookOrderComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookOrderRoutingModule { }
