import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm')
  contactForm;

  message = new TemlpateMessage();

  constructor() { }

  ngOnInit() {}

  onSubmit() {
  this.message = new TemlpateMessage();
  this.contactForm.resetForm(this.message);
}

}
  class TemlpateMessage {
  
    constructor (
      public topic?: string,
      public message?: string,
      public name?: string,
      public email?: string){}
    }
  


