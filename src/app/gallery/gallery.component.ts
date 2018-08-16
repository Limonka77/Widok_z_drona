import {
  Component,
  OnInit
} from '@angular/core';
import {
  Gallery
} from '../models/gallery.models';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

title="Galeria";
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {
    this.galleryOptions = [{
        width: '100%',
        height: '500px',
        thumbnailsColumns: 4,
        imageDescription: true,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = [{
        small: 'assets/images/krakow2.jpg',
        medium: 'assets/images/krakow2.jpg',
        big: 'assets/images/krakow2.jpg',
        description: 'Kraków'
      },
      {
        small: 'assets/images/hel.jpg',
        medium: 'assets/images/hel.jpg',
        big: 'assets/images/hel.jpg',
        description: 'Półwysep Helski'
      },
      {
        small: 'assets/images/klodzkotwierdza.jpg',
        medium: 'assets/images/klodzkotwierdza.jpg',
        big: 'assets/images/klodzkotwierdza.jpg',
        description: 'Twierdza w Kotlinie'
      },
      {
          small: 'assets/images/malbork.jpg',
          medium: 'assets/images/malbork.jpg',
          big: 'assets/images/malbork.jpg',
          description: 'Zamek w Malborku'
        },
        {
          small: 'assets/images/slask.jpg',
          medium: 'assets/images/slask.jpg',
          big: 'assets/images/slask.jpg',
          description: 'Dolny Śląsk'
        },
        {
          small: 'assets/images/zielonagora.jpg',
          medium: 'assets/images/zielonagora.jpg',
          big: 'assets/images/zielonagora.jpg',
          description: 'Zielon Góra'
        }
    ];
  }
}
