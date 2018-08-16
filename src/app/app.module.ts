import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { CarouselComponent } from './carousel/carousel.component';


const appRoutes: Routes = [
  { path: 'Home', component:  HomeComponent},
  { path: 'About', component:  AboutComponent },
  { path: 'Gallery', component: GalleryComponent},
  { path: 'Contact', component: ContactComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule .forRoot(appRoutes),
    FormsModule,
    CarouselModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
