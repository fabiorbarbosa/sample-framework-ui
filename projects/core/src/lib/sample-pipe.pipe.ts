import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplePipe',
  standalone: true
})
export class SamplePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
