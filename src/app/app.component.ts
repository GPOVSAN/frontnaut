import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
FilterPost = '';

  cards = [
    {
      num: '1',
      title: 'Dead Pool',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      year: '2014',
      buttonText: 'Button',
      img: './../assets/43439.jpg'
    },
    {
      num: '2',
      title: 'Guardianes De La Galaxia',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      year: '2016',
      buttonText: 'Button',
      img: './../assets/galaxy.jpg'
    },
    {
      num: '3',
      title: ' Dark Knight',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      year: '2008',
      buttonText: 'Button',
      img: './../assets/bat.jpg'
    },

    {
      num: '4',
      title: ' Origen',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      year: '2010',
      buttonText: 'Button',
      img: './../assets/origen.jpg'
    },
    {
      num: '5',
      title: 'Dr Strange',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      year: '2016',
      buttonText: 'Button',
      img: './../assets/dr.jpg'
    },
    {
      num: '6',
      title: 'Logan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      year: '2017',
      buttonText: 'Button',
      img: './../assets/logan.jpg'
    },
  ];
}


