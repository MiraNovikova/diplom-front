import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook, IList } from 'src/app/interface/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: IList[];
  item: IBook[]

  constructor(private router: Router) { }

  ngOnInit(): void {

}

}