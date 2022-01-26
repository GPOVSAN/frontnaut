import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';

  cards = [
    {
      num: '1',
      title: 'Pelicula  1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: './../assets/43439.jpg'
    },
    {
      num: '2',
      title: 'Pelicula 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: './../assets/43439.jpg'
    },
    {
      num: '3',
      title: 'Pelicula 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: './../assets/43439.jpg'
    },
    {
      num: '4',
      title: 'Pelicula 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: './../assets/43439.jpg'
    },
    {
      num: '5',
      title: 'Pelicula 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: './../assets/43439.jpg'
    },
  ];
}


