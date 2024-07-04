import { Component, OnInit } from '@angular/core';
import { IBook, IList} from '../../../interface/books';
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
        image: 'https://st14.styapokupayu.ru/ckeditor_assets/pictures/000/238/708_content.jpg',
        id: '1'
      },
      {
        title: "Колесо Времени",
        image: 'https://xlm.ru/storage/uploads/images/2021/10/25/ibuuL3qSVfg4uXszW1DUebntN2ac8IbBYE1rlkZU.jpeg'
      },
      {
        title: "Цвет волшебства",
        image: 'https://avatars.mds.yandex.net/get-mpic/4441046/img_id6575235405381453097.jpeg/orig'
      },
      {
        title: "Чужак",
        image: 'https://book24.kz/upload/iblock/b7b/b7bebaf5b0f7f8f9867da4b3a3c4b846.jpg'
      },
      {
        title: "Гарри Поттер и философский камень",
        image: 'https://cdn1.ozone.ru/s3/multimedia-k/6405137108.jpg'
      },
      {
        title: "Хроника Убийцы Короля.Имя ветра",
        image: 'https://avatars.yandex.net/get-music-content/6386858/b41b12a1.a.24313909-1/m1000x1000?webp=false'
      },
      {
        title: "",
        image: ''
      }
    ]
  }

  goToBookInfoPage(item: IBook) { 
    console.log('item', item);
    
    this.router.navigate(['/books/book/'],
      { queryParams: {id: item.id}}
      );
  }

}
