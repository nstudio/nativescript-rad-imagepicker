import { PickerOptions, RadImagepicker } from "@nstudio/nativescript-rad-imagepicker";
import { Observable, ObservableArray, Screen, Frame } from "@nativescript/core";
import { Repeater } from "@nativescript/core/ui";

export class HelloWorldModel extends Observable {
  public images = new ObservableArray([]);
  private radImagepicker: RadImagepicker;
  public imageWidth;
  public hideHint = false;

  constructor() {
    super();

    if (Screen.mainScreen.widthDIPs >= 350) {
      this.imageWidth = Screen.mainScreen.widthDIPs / 4;
    } else {
      this.imageWidth = Screen.mainScreen.widthDIPs / 3;
    }
    this.radImagepicker = new RadImagepicker();
  }

  pickImage() {
    const opts: PickerOptions = {
      doneButtonTitle: "Finish",
      allowVideoSelection: false,
      noImagesTitle: "No images here :(",
      imageLimit: 5
    };

    this.radImagepicker.pick(opts).then(selectedImages => {
      if (selectedImages) {
        this.images.length = 0;
        for (let i = 0; i < selectedImages.length; i++) {
          this.images.push({
            source: selectedImages[i]
          });
        }

        const repeaterView: Repeater = Frame.topmost().getViewById("repeaterView");
        repeaterView.items = this.images;

        (<any> Frame.topmost().getViewById('hint')).visibility = 'collapse';
      } else {
        console.log('User pressed cancel');
      }
    });
  }
}
