import { Common, PickerOptions } from './rad-imagepicker.common';
import * as app from "tns-core-modules/application";
import * as utils from 'tns-core-modules/utils/utils';

declare var com: any;

export class RadImagepicker extends Common {

    constructor() {
        super();
    }

    pick(options: PickerOptions): Promise<Array<any>> {

        com.fxn.pix.Pix.start(app.android.foregroundActivity, 100, 5);
        
        app.android.foregroundActivity.onActivityResult = function(
            requestCode,
            resultCode,
            data
        ) {
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

        // TODO: resolve the promise with image array
        return new Promise((resolve, reject) => {
            resolve ([]);
        })
    }
}
