import { Component, OnInit } from '@angular/core';
import { IBook, IList } from '../../../interface/books';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  books: IList[];
  item: IBook[]

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.books = [
      {
        title: "Властелин колец",
        image: 'https://cdn.ast.ru/v2/ASE000000000717323/COVER/cover1__w600.jpg',
        id: '1'
      },
      {
        title: "Дом драконов",
        image: 'https://cdn.ast.ru/v2/ASE000000000865323/COVER/cover1__w600.jpg',
        id: '17'
      },
      {
        title: "Цвет волшебства",
        image: 'https://avatars.mds.yandex.net/get-mpic/4441046/img_id6575235405381453097.jpeg/orig',
        id: '8'
      },
      {
        title: "Чужак",
        image: 'https://book24.kz/upload/iblock/b7b/b7bebaf5b0f7f8f9867da4b3a3c4b846.jpg',
        id: '6'
      },
      {
        title: "Пятый мир",
        image: 'https://allbook.by/wp-content/uploads/2023/12/5-11.jpg',
        id: '12'
      },
      {
        title: "Дракон цвета смерти",
        image: 'https://ndc.bookvoed.ru/resize/1024x1024/iblock/4ff/4ff74088e9eb21671a222b3e5232fb03/c7355179a3b1ee9f38baa4321496ca64.jpeg',
        id: '14'
      },
      {
        title: "",
        image: ''
      }
    ]
  }

  back() { }

  goToBookInfoPage(item: IBook) {
    console.log('item', item);

    this.router.navigate(['/books/book/'],
      { queryParams: { id: item.id } }
    );
  }

}
