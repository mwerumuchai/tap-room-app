import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "fullness",
  pure: false
})

export class FullnessPipe implements PipeTransform {
  transform(input: Keg[], desiredFullness) {
    console.log('pipe');
    var output: Keg[] = [];
    if (desiredFullness === 'fullKegs') {
      for(var i=0;i<input.length;i++) {
        if(input[i].pints > 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFullness === 'emptyKegs') {
      for(var i=0;i<input.length;i++) {
        if(input[i].pints <= 0) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}
