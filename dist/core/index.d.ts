import * as i0 from '@angular/core';
import { PipeTransform } from '@angular/core';

declare class SamplePipePipe implements PipeTransform {
    transform(value: unknown, ...args: unknown[]): unknown;
    static ɵfac: i0.ɵɵFactoryDeclaration<SamplePipePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SamplePipePipe, "samplePipe", true>;
}

export { SamplePipePipe };
