import { Component, OnInit } from '@angular/core';
//import { CarouselPhotos } from '../models/carouselPhotos.models';
import { Skills } from '../models/skills.models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

skills: Skills[] = [
  {
     fa: 'fa fa-paper-plane fa-4x',
    title: 'Cały Świat',
    pharagraph: 'Możemy robić zdjęcia, gdzie tylko sobie zażyczycie. Nasi fachowcy są w stanie dotrzeć do każdego zakamarka na ziemi'
  },
  {
   fa: 'fa fa-leaf fa-4x',
    title: 'Ekologia',
    pharagraph: 'W trakcie wykonywania zdjęć nie emitujemy do środowiska żadnych szkodliwych substancji'
  },
  {
   fa: 'fa fa-camera fa-4x',
    title: 'Piękne zdjęcia',
    pharagraph: 'Profesjonalne loty i wykonywanie zdjęć to nasza pasja'
  }
];



  constructor() { }

  ngOnInit() {
  }

}
