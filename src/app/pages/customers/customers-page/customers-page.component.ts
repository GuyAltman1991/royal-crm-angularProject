import { Component } from '@angular/core';
import { ControllerInterface } from 'src/app/components/display-mode-controllers/controller-interface';
import { CategoryInterface } from 'src/app/components/search-bar/category-interface';
import { CustomersInterface } from '../customers-interface';
import { CustomersServiceService } from '../customers-service.service';

@Component({
  selector: 'customers-page',
  templateUrl: './customers-page.component.html',
  styles: [],
})
export class CustomersPageComponent {
  customers: Array<CustomersInterface> = [];
  customerData: CustomersInterface[] = [];
  categories: Array<CategoryInterface> = [
    { name: 'First Name', value: 'firstName' },
    { name: 'Last name', value: 'lastName' },
    { name: 'Email', value: 'email' },
    { name: 'Phone', value: 'phone' },
    { name: 'id Card', value: 'idCard' },
  ];
  constructor(private customerService: CustomersServiceService) {
    this.customers = customerService.getAll();
    this.customerData = this.customers;
  }

  display: string = 'table';
  controllers: Array<ControllerInterface> = [
    { icon: 'fa fa-table-list', value: 'table' },
    { icon: 'fa fa-folder', value: 'folder' },
  ];

  onSearch(array: CustomersInterface[]) {
    this.customers = array;
  }

  onChangeDisplay(display: string) {
    this.display = display;
  }

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.customerService.delete(id);
    this.customerData = this.customerService.getAll();
    this.customers = this.customerData;
  }
}