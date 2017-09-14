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
    <option value="stout">Stout Kegs</option>
    <option value="ale">Ale Kegs</option>
    <option value="ipa">IPA Kegs</option>
    <option value="porter">Porter Kegs</option>
    <option value="kombucha">Kombucha Kegs</option>
    <option value="allKegs">All Kegs</option>
  </select>
  <div *ngFor="let keg of kegs | fullness:filterByFullness | type:filterByType">
  <ul (click)="selectKeg(keg)">
    <li>Name: {{ keg.name }} </li>
    <li>Brand: {{ keg.brand }} </li>
    <li>Type: {{ keg.type }} </li>
    <li [class]='cost(keg)'>Price: {{ keg.price }} </li>
    <li [class]='strength(keg)'>alcoholContent: {{ keg.alcoholContent }}</li>
    <li [class]='runningOut(keg)'>pints left: {{ keg.pints }}</li>
  </ul>
  <button (click)="soldPint(keg)">Pint Sold!</button>
  <button (click)="soldGrowler(keg)">Growler Sold!</button>
  <button (click)="soldLargeGrowler(keg)">large growler Sold!</button>
  </div>
  `
})

export class KegListComponent {
  @Input() kegs: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByFullness: string = "fullKegs";
  filterByType: string = "stoutKegs";

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
    if(ac > 5.2) {
      return 'bg-success';
    } else {
      return 'bg-danger';
    }
  }

  cost(keg) {
    var cost = parseInt(keg.price.replace(/\D/g,''));
    if(cost <= 100) {
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
    if(keg.pints < 10) {
      return 'bg-danger';
    } else {
      return '';
    }
  }

}
