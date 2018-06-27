import { Common, PickerOptions } from './rad-imagepicker.common';
import * as app from "tns-core-modules/application";
import * as utils from 'tns-core-modules/utils/utils';

declare var com: any;
const Pix = com.fxn.pix.Pix;

export class RadImagepicker extends Common {

    constructor() {
        super();
    }

    pick(options: PickerOptions): Promise<Array<any>> {

        const onResult = function(args) {
            const requestCode = args.requestCode;
            const resultCode = args.resultCode;
            const data = args.intent;
            switch (requestCode) {
                case (100): {
                    if (resultCode == android.app.Activity.RESULT_OK) {
                        const returnValue = data.getStringArrayListExtra(Pix.IMAGE_RESULTS);
                        console.log(returnValue);
                    }
                }
                break;
            }
        }
        app.android.on(app.AndroidApplication.activityResultEvent, onResult);

        com.fxn.pix.Pix.start(app.android.foregroundActivity, 100, 5);

        // TODO: resolve the promise with image array
        return new Promise((resolve, reject) => {
            resolve ([]);
        })
    }
}
