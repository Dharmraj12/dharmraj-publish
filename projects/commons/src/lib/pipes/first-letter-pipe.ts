import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'mnlFirstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string) {
    return value ? value.substring(0, 1).toUpperCase() : null;
  }

}
