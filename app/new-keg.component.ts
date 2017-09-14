import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
  <label>Enter Keg Name</label>
    <input #newName>
  <label>Enter Keg Brand</label>
    <input #newBrand>
  <label>Enter Keg Price</label>
    <input #newPrice>
  <label>Enter Keg Alcohol Content</label>
    <input #newAlcoholContent>
  <label>Select a Type</label>
    <select #newType>
    <option value="stout">Stout</option>
    <option value="ale">Ale</option>
    <option value="kombucha">kombucha</option>
    <option value="porter">porter</option>
    <option value="ipa">IPA</option>
    </select>
  <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value, newType.value);newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value='';">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: string, alcoholContent: string, type: string) {
    var newKeg: Keg = new Keg(name, brand, price, alcoholContent, type);
    this.newKegSender.emit(newKeg);
  }
}
