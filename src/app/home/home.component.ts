import { Component, OnInit } from '@angular/core';
//import { CarouselPhotos } from '../models/carouselPhotos.models';
import { Skills } from '../models/skills.models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//class=`fa fa-american-sign-language-interpreting fa-5x`;
//class:string[] = [ fa:"fa fa-american-sign-language-interpreting fa-5x","fa fa-window","fa fa-home")];




  // photos: CarouselPhotos[] = [
  //   {
  //     name: 'Kraków',
  //     photoPath: 'assets/images/krakow.jpg'
  //   },
  //   {
  //     name: 'Gdynia',
  //     photoPath: 'assets/images/gdynia.jpg'
  //   },
  //   {
  //     name: 'Gdańsk',
  //     photoPath: 'assets/images/gdansk.jpg'
  //   }
  // ];

skills: Skills[] = [
  {
     fa: 'fa fa-paper-plane fa-5x',
    title: 'Cały Świat',
    pharagraph: 'Możemy robić zdjęcia, gdzie tylko sobie zażyczycie. Nasi fachowcy są w stanie dotrzeć do każdego zakamarka na ziemi'
  },
  {
   fa: 'fa fa-leaf fa-5x',
    title: 'Ekologia',
    pharagraph: 'W trakcie wykonywania zdjęć nie emitujemy do środowiska żadnych szkodliwych substancji'
  },
  {
   fa: 'fa fa-camera fa-5x',
    title: 'Piękne zdjęcia',
    pharagraph: 'Profesjonalne loty i wykonywanie zdjęć to nasza pasja'
  }
];



  constructor() { }

  ngOnInit() {
  }

}
