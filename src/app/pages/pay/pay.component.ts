import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interface/books';
import { BooksService } from '../service/books/books.service';
import { Router } from '@angular/router';
import { BasketService } from '../service/basket/basket.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  book: IBook | undefined;
  basket: IBook[] = [];
  

  ORDERMOCK: []
  constructor(private booksService: BooksService,
    private router: Router,
    private basketService: BasketService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }



  initPay(ev: Event): void {
    alert("Спасибо, ваша покупка оформлена. Перейдите в личный кабинет")
  }
}
