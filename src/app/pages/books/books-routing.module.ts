import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  { 
    path: '',
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
    path: 'news',
     loadChildren: () => import('../news/news.module').then(m => m.NewsModule)
   },
   {
    path: 'setting',
     loadChildren: () => import('../../pages/setting/setting.module').then(m => m.SettingModule)
   },
   {
    path: 'basket',
     loadChildren: () => import('../../pages/basket/basket.module').then(m => m.BasketModule),
     
   },
   {
    path: 'pay',
     loadChildren: () => import('../../pages/pay/pay.module').then(m => m.PayModule)
   },
  /* {
    path: 'auth',
    loadChildren: () => import('../../pages/auth/auth.module').then(m => m.AuthModule)
   },*/
]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BooksRoutingModule { }
