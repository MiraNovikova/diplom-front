import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBook, IInfo } from '../../interface/books';
import { IUser } from '../../interface/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlocksStyleDirective } from '../../directive/blocks-style.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksStorageService } from '../service/books-storage/books-storage.service';
import { BooksService } from '../service/books/books.service';
import { BookRestService } from '../service/rest/book-rest.service';
import { BasketService } from '../service/basket/basket.service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {

  }

}


/*
    const bookId = this.route.snapshot.queryParamMap.get('id');
    this.booksService.getBookById(bookId).subscribe((data) => {
      this.item = data;
    });
    */