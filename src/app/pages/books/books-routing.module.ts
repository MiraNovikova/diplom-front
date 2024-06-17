import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  { path: '', 
  component: BooksComponent,
children: [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'books-list',
     loadChildren: () => import('../../pages/books-list/books-list.module').then(m => m.BooksListModule)
   },
   {
    path: 'book',
    loadChildren: () => import('../../pages/book/book.module').then(m => m.BookModule)
  },
   {
    path: 'book-order',
     loadChildren: () => import('../../pages/book-order/book-order.module').then(m => m.BookOrderModule)
   },
   {
    path: 'setting',
     loadChildren: () => import('../../pages/setting/setting.module').then(m => m.SettingModule)
   }
]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BooksRoutingModule { }
