import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNum',
})
export class RandomNumPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    if (!value && args) return value;
    if (value && args) return 0;
    if (value || args) return;
    return null;
  }
}
