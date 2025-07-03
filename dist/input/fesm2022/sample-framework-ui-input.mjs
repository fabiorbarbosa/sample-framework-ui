import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class InputService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class InputComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: InputComponent, isStandalone: true, selector: "lib-input", ngImport: i0, template: `
    <p>
      input works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-input', standalone: true, imports: [], template: `
    <p>
      input works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InputComponent, InputService };
//# sourceMappingURL=sample-framework-ui-input.mjs.map
