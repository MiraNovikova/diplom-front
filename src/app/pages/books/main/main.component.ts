import { Component, OnInit } from '@angular/core';
import { IBook, IBookList} from '../../interface/books';
import { BooksService } from '../../service/books/books.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  booksList: IBookList[];

  constructor(private booksService : BooksService) { }

  ngOnInit(): void {
  }

}
