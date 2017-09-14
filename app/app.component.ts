import { Component } from '@angular/core';
import { Keg } from './keg.model';

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
  kegs: Keg[] = [
    new Keg('Irish Stout', 'Beamish', '$250', '7.2%', 'stout'),
    new Keg('Cream Ale', 'Kikenny', '$100', '4.4%', 'Ale'),
    new Keg('Irish Wheat', 'MUrphy', '$100', '5.2%', 'stout')
  ];
}
