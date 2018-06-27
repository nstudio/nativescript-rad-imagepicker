import { Common, PickerOptions } from './rad-imagepicker.common';
import * as app from "tns-core-modules/application";

declare var com: any;

export class RadImagepicker extends Common {

    constructor() {
        super();
    }

    pick(options: PickerOptions): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            console.log(com.fxn.pix.Pix);
            resolve ([]);
            // com.fxn.pix.Pix.start(app.android.foregroundActivity, 100, 5);
        })
    }
}
