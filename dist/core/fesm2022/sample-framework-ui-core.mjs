import * as i0 from '@angular/core';
import { Pipe } from '@angular/core';

class SamplePipePipe {
    transform(value, ...args) {
        return null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SamplePipePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SamplePipePipe, isStandalone: true, name: "samplePipe" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SamplePipePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'samplePipe',
                    standalone: true
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SamplePipePipe };
//# sourceMappingURL=sample-framework-ui-core.mjs.map
