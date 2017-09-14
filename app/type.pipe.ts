import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "type",
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: Keg[], desiredType) {
    var output: Keg[] = [];
    if (desiredType === 'stout') {
      for(var i=0;i<input.length;i++) {
        if(input[i].type === 'stout') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === 'ale') {
      for(var i=0;i<input.length;i++) {
        if(input[i].type === 'ale') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === 'ipa') {
      for(var i=0;i<input.length;i++) {
        if(input[i].type === 'ipa') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === 'porter') {
      for(var i=0;i<input.length;i++) {
        if(input[i].type === 'porter') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === 'kombucha') {
      for(var i=0;i<input.length;i++) {
        if(input[i].type === 'kombucha') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
