import * as app from "@nativescript/core/application";
import { Common, PickerOptions } from './rad-imagepicker.common';
import { Frame, ImageSource } from "@nativescript/core";
import * as permissions from "nativescript-permissions";

declare var com: any;
const Pix = com.fxn.pix.Pix;

export class RadImagepicker extends Common {

    constructor() {
        super();
    }

    private authorize() {
        if ((<any>android).os.Build.VERSION.SDK_INT >= 23) {
            return permissions.requestPermission([
                    (<any>android).Manifest.permission.READ_EXTERNAL_STORAGE,
                    (<any>android).Manifest.permission.WRITE_EXTERNAL_STORAGE,
                    (<any>android).Manifest.permission.CAMERA
                ]);
        } else {
            return Promise.resolve();
        }
    }

    pick(options: PickerOptions): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            this.authorize()
                .then(() => {
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
                                        images.push( ImageSource.fromFile(imgArray[i].toString()));
                                    }
                                    resolve(images);
                                } else if (resultCode == android.app.Activity.RESULT_CANCELED) {
                                    resolve(undefined);
                                }
                            }
                            break;
                        }
                    }
                    app.android.on(app.AndroidApplication.activityResultEvent, onResult);
        
                    let activity = Frame.topmost().android.activity;
                    let i = new android.content.Intent(activity, com.fxn.pix.Pix.class);
                    i.putExtra("selection", options.imageLimit);
        
                    activity.startActivityForResult(i, 100);
                })
                .catch(() => {
                    reject("Permissions not satisfied");
                });
        });
    }
}
