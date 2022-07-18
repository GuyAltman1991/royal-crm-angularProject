import { Component } from '@angular/core';
import { ContactsInterface } from '../contacts-interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent {
  contacts: Array<ContactsInterface> = [];
  contact1: ContactsInterface = {
    id: '123456',
    address: {
      country: 'israel',
      city: 'ramat-gan',
      street: 'Pinchas',
      houseNumber: 25,
    },
    age: 30,
    birthDay: new Date('1995, 11, 17'),
    email: 'guy@gmail.com',
    firstName: 'Guy',
    lastName: 'Altman',
    phone: '0547081687',
  };
  contact2: ContactsInterface = {
    id: '548795',
    address: {
      country: 'Israel',
      city: 'Tel-aviv',
      street: 'Alenbi',
      houseNumber: 87,
    },
    age: 28,
    birthDay: new Date('10/11/1955 10:40:50 AM'),
    email: 'jay@gmail.com',
    firstName: 'Jay',
    lastName: 'Barbovsky',
    phone: '0548795847',
  };
  constructor() {
    this.contacts.push(this.contact1);
    this.contacts.push(this.contact2);
  }
}
