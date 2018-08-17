import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 team:Team[] = [
   {
    imagePath: 'assets/images/michal.jpg',
    teamTitle: 'Michał Nowak',
    teamContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos molestias quis, blanditiis voluptatibus debitis odit. Voluptatem saepe, eveniet alias deserunt minima dolorem odit consectetur provident? Nam commodi eligendi ullam. Ad.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi velit magnam quod ipsam neque!`
   },
   {
    imagePath: 'assets/images/mariusz.jpg',
    teamTitle: 'Mariusz Makowski',
    teamContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos molestias quis, blanditiis voluptatibus debitis odit. Voluptatem saepe, eveniet alias deserunt minima dolorem odit consectetur provident? Nam commodi eligendi ullam. Ad.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi velit magnam quod ipsam neque!`
   },
   {
    imagePath: 'assets/images/wojtek.jpg',
    teamTitle: 'Wojtek Krzywy',
    teamContent: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos molestias quis, blanditiis voluptatibus debitis odit. Voluptatem saepe, eveniet alias deserunt minima dolorem odit consectetur provident? Nam commodi eligendi ullam. Ad.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi velit magnam quod ipsam neque!`
   },
  ]
  constructor() { }

  ngOnInit() {
  }

}
