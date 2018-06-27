import { Common } from './rad-imagepicker.common';
import * as frame from "tns-core-modules/ui/frame";

let callbacks: any = {};
let imagePickerController;
export class RadImagepicker extends Common {

    constructor() {
        super();
    }

    pick(options) {
        const viewController = frame.topmost().currentPage.ios;
        
        imagePickerController = ImagePickerController.new();

        const config = Configuration.new();
        config.doneButtonTitle = "Finish";
        config.noImagesTitle = "Sorry! There are no images here!";
        config.recordLocation = false;
        config.allowVideoSelection = false;

        imagePickerController.initWithConfiguration(config);
        imagePickerController.imageLimit = 1;

        callbacks.done = options.done;
        imagePickerController.delegate = new ImagePickerControllerDelegateImpl();
        viewController.presentViewControllerAnimatedCompletion(imagePickerController, true, null);
    }
}

export class ImagePickerControllerDelegateImpl extends NSObject implements ImagePickerDelegate {

    public static ObjCProtocols = [ImagePickerDelegate];

    private _owner;
    public static initWithOwner(owner): ImagePickerControllerDelegateImpl {
        const delegate = <ImagePickerControllerDelegateImpl>ImagePickerControllerDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    }

    cancelButtonDidPress(imagePicker: ImagePickerController): void {
        console.log('user pressed cancel');
        const viewController = frame.topmost().currentPage.ios;
        viewController.dismissViewControllerAnimatedCompletion(true, null);
    }    
    
    doneButtonDidPressImages(imagePicker: ImagePickerController, images: NSArray<UIImage>): void {
        console.log('user pressed done');
        let selectedImages = [];
        for (let i = 0; i < images.count; i++) {
            selectedImages.push(images[i]);
        }
        callbacks.done(selectedImages);
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
