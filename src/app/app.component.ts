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
      title: 'Dead Pool',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      ano: '2014',
      buttonText: 'Button',
      img: './../assets/43439.jpg'
    },
    {
      num: '2',
      title: 'Guardianes De La Galaxia',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      ano: '2016',
      buttonText: 'Button',
      img: './../assets/galaxy.jpg'
    },
    {
      num: '3',
      title: 'Pelicula 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      ano: '2020',
      buttonText: 'Button',
      img: './../assets/43439.jpg'
    },
    {
      num: '4',
      title: 'Pelicula 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      ano: '2020',
      buttonText: 'Button',
      img: './../assets/43439.jpg'
    },
    {
      num: '5',
      title: 'Pelicula 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      ano: '2020',
      buttonText: 'Button',
      img: './../assets/43439.jpg'
    },
  ];
}


