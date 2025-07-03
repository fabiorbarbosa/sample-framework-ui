import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class ButtonService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class ButtonComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ButtonComponent, isStandalone: true, selector: "lib-button", ngImport: i0, template: `
    <p>
      button works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', standalone: true, imports: [], template: `
    <p>
      button works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of button
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonService };
//# sourceMappingURL=sample-framework-ui-button.mjs.map
