import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksListItemComponent } from './books-list-item.component';

const routes: Routes = [
  { path: '', component: BooksListItemComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]

})
export class BookListItemRoutingModule { }
