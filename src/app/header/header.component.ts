import {
  Component,
  OnInit
} from '@angular/core';
import {
  CarouselPhotos
} from '../models/carouselPhotos.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoPath = 'assets/images/dron.jpg';
  navbarOpen = false;
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() {}

  ngOnInit() {}

}
