import { Common, PickerOptions } from './rad-imagepicker.common';
import * as app from "tns-core-modules/application";
import * as frame from "tns-core-modules/ui/frame";
import * as imageSourceModule from 'tns-core-modules/image-source';

declare var com: any;
const Pix = com.fxn.pix.Pix;

export class RadImagepicker extends Common {

    constructor() {
        super();
    }

    pick(options: PickerOptions): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            const onResult = function(args) {
                const requestCode = args.requestCode;
                const resultCode = args.resultCode;
                const data = args.intent;
                switch (requestCode) {
                    case (100): {
                        if (resultCode == android.app.Activity.RESULT_OK) {
                            const returnValue = data.getStringArrayListExtra(Pix.IMAGE_RESULTS);
                            const imgArray = returnValue.toArray();
                            const images = [];
                            for (let i = 0; i < imgArray.length; i++ ) {
                                images.push(imgArray[i].toString());
                            }
                            resolve(images);
                        }
                    }
                    break;
                }
            }
            app.android.on(app.AndroidApplication.activityResultEvent, onResult);

            let activity = frame.topmost().android.activity;
            let i = new android.content.Intent(activity, com.fxn.pix.Pix.class);
            i.putExtra("selection", options.imageLimit);
            activity.startActivityForResult(i, 100);
        })
    }
}
