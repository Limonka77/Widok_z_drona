import { Component, OnInit } from '@angular/core';
import { CarouselPhotos } from '../models/carouselPhotos.models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  photos: CarouselPhotos[] = [
    {
      name: 'Kraków',
      photoPath: 'assets/images/krakow.jpg'
    },
    {
      name: 'Gdynia',
      photoPath: 'assets/images/gdynia.jpg'
    },
    {
      name: 'Gdańsk',
      photoPath: 'assets/images/gdansk.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
