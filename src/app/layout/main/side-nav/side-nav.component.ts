import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: [],
})
export class SideNavComponent {
  links: Array<string> = ['costumers', 'contacts'];
  constructor() {}
}
