import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersInterface } from '../../customers-page/customers-interface';
import { ContactInterface } from '../contact-interface';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'new-contact',
  templateUrl: './new-contact.component.html',
  styles: [],
})
export class NewContactComponent {
  constructor(
    private CS: ContactsServiceService,
    private routerService: Router
  ) {}

  onSubmit(contact: ContactInterface) {
    this.CS.add(contact);
    this.routerService.navigate(['/contacts']);
  }
}
