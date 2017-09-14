import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Welcome to Keg Bar</h1>
    <keg-list [kegs]="kegs" (clickSender)="selectKeg($event)"></keg-list>
  </div>
  `
})

export class AppComponent {

}
