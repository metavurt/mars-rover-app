import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TextExcerpt'
})
export class TextExcerptPipe implements PipeTransform {

  transform(value: string, limit?: number) {
    const chars = limit ? limit : 450;
    const trail = '...';
    return value.length > chars ? value.substring(0, chars) + trail : value + trail;
   }
}
