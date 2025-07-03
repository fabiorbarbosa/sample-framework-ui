import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class CardService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class CardComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CardComponent, isStandalone: true, selector: "lib-card", ngImport: i0, template: `
    <p>
      card works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-card', standalone: true, imports: [], template: `
    <p>
      card works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of card
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, CardService };
//# sourceMappingURL=sample-framework-ui-card.mjs.map
