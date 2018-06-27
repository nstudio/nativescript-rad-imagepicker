import { Common } from './rad-imagepicker.common';
import * as app from "tns-core-modules/application";

declare var com: any;

export class RadImagepicker extends Common {

    constructor() {
        super();
    }

    pick(options) {
        console.log(com.fxn.pix.Pix);
        // com.fxn.pix.Pix.start(app.android.foregroundActivity, 100, 5);
    }
}
