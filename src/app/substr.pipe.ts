import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubstrPipe implements PipeTransform {

  transform(
    value: string,
    start: number,
    end: number): any {
    return value.substring(start, end);
  }

}
