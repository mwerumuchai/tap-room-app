import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onFullnessChange($event.target.value)">
    <option value="allKegs">All Kegs</option>
    <option value="fullKegs">Full Kegs</option>
    <option value="emptyKegs">Empty Kegs</option>
  </select>
  <select (change)="onTypeChange($event.target.value)">
    <option value="amber">Amber Kegs</option>
    <option value="shitty">Shitty Kegs</option>
    <option value="ipa">IPA Kegs</option>
    <option value="stout">Stout Kegs</option>
    <option value="kombucha">Kombucha Kegs</option>
    <option value="allKegs">All Kegs</option>
  </select>
  <div *ngFor="let keg of kegs | fullness:filterByFullness | type:filterByType">
  <ul (click)="selectKeg(keg)">
    <li> Name: {{keg.name}} </li>
    <li>Brand: {{keg.brand}} </li>
    <li>Type: {{keg.type}} </li>
    <li [class]='cost(keg)'>Price: {{keg.price}} </li>
    <li [class]='strength(keg)'>alcoholContent: {{keg.alcoholContent}}</li>
    <li [class]='runningOut(keg)'>pints left: {{keg.pints}}</li>
  </ul>
  <button (click)="soldPint(keg)">sold a pint!</button>
  <button (click)="soldGrowler(keg)">sold a growler!</button>
  <button (click)="soldLargeGrowler(keg)">sold a large growler!</button>
  </div>
  `
})

export class KegListComponent {
  @Input() kegs: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByFullness: string = "fullKegs";
  filterByType: string = "amberKegs";

  selectKeg(keg: Keg) {
    this.clickSender.emit(keg);
  }


  onFullnessChange(option){
    this.filterByFullness = option;
  }

  onTypeChange(option){
    this.filterByType = option;
  }

  strength(keg) {
    var ac = parseInt(keg.alcoholContent);
    if(ac > 5.5) {
      return 'bg-success';
    } else {
      return 'bg-danger';
    }
  }

  cost(keg) {
    var cost = parseInt(keg.price.replace(/\D/g,''));
    if(cost <= 150) {
      return 'bg-success';
    } else {
      return 'bg-danger';
    }
  }

  soldPint(keg: Keg) {
    keg.pints = keg.pints-1;
  }
  soldGrowler(keg: Keg) {
    keg.pints = keg.pints-2;
  }
  soldLargeGrowler(keg: Keg) {
    keg.pints = keg.pints-4;
  }

  runningOut(keg) {
    if(keg.pints < 11) {
      return 'bg-danger';
    } else {
      return '';
    }
  }

}
