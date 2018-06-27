import { Common, PickerOptions } from './rad-imagepicker.common';
import * as frame from "tns-core-modules/ui/frame";

let imagePickerController;
export class RadImagepicker extends Common {

    constructor() {
        super();
    }

    pick(options: PickerOptions): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            const viewController = frame.topmost().currentPage.ios;
        
            imagePickerController = ImagePickerController.new();

            const config = Configuration.new();

            if (options) {
                if (options.doneButtonTitle) {
                    config.doneButtonTitle = options.doneButtonTitle;
                }
                if (options.noImagesTitle) {
                    config.noImagesTitle = options.noImagesTitle;
                }
                if (options.allowVideoSelection !== undefined) {
                    config.allowVideoSelection = options.allowVideoSelection;
                }
            }

            imagePickerController.initWithConfiguration(config);
            if (options && options.imageLimit > 0) {
                imagePickerController.imageLimit = options.imageLimit;
            }

            imagePickerController.delegate = ImagePickerDelegateImpl.new().initWithCallback((selectedImages) => {
                resolve(selectedImages);
            });
            viewController.presentViewControllerAnimatedCompletion(imagePickerController, true, null);
        });
    }
}

export class ImagePickerDelegateImpl extends NSObject implements ImagePickerDelegate {
    public static ObjCProtocols = [ImagePickerDelegate];
    static new(): ImagePickerDelegateImpl {
        return <ImagePickerDelegateImpl>super.new();
    }
    private _callback: (images?) => void;

    public initWithCallback(callback: (images?) => void): ImagePickerDelegateImpl {
        this._callback = callback;
        return this;
    }

    cancelButtonDidPress(imagePicker: ImagePickerController): void {
        console.log('user pressed cancel');
        this._callback();
        const viewController = frame.topmost().currentPage.ios;
        viewController.dismissViewControllerAnimatedCompletion(true, null);
    }    
    
    doneButtonDidPressImages(imagePicker: ImagePickerController, images: NSArray<UIImage>): void {
        console.log('user pressed done');
        let selectedImages = [];
        for (let i = 0; i < images.count; i++) {
            selectedImages.push(images[i]);
        }
        this._callback(selectedImages);
        const viewController = frame.topmost().currentPage.ios;
        viewController.dismissViewControllerAnimatedCompletion(true, null);
    }

    wrapperDidPressImages(imagePicker: ImagePickerController, images: NSArray<UIImage>): void {
        console.log('user tapped on images');
        const viewController = frame.topmost().currentPage.ios;
        if (images.count < 1) {
            viewController.dismissViewControllerAnimatedCompletion(true, null);
        } else {
            let lightboxImages = [];
            
            for (let i = 0; i < images.count; i++) {
                const lb = new LightboxImage({
                    image: images[i],
                    text: null,
                    videoURL: null
                });
                lightboxImages.push(lb);
            }
            
            let lightbox = new (<any> LightboxController)({
                images: lightboxImages,
                startIndex: 0
            });
            
            imagePickerController.presentViewControllerAnimatedCompletion(lightbox, true, null);
        }
    }
}
