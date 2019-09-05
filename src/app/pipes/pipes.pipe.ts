import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceArrayPipe'
})
export class SliceArrayPipe implements PipeTransform {

  transform(factors: any[], row: number): any {
    return factors.slice(row * 6, row * 6 + 6);
  }

}
