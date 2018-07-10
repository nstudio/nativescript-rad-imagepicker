import { RadImagepicker, PickerOptions } from 'nativescript-rad-imagepicker'; 
// use @nstudio/nativescript-rad-imagepicker when you install this plugin in your project

import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { topmost } from 'tns-core-modules/ui/frame';
import { Repeater } from 'tns-core-modules/ui/repeater';
import { screen } from "tns-core-modules/platform";


export class HelloWorldModel extends Observable {
  public images = new ObservableArray([]);
  private radImagepicker: RadImagepicker;
  public imageWidth;
  public hideHint = false;

  constructor() {
    super();

    if (screen.mainScreen.widthDIPs >= 350) {
      this.imageWidth = screen.mainScreen.widthDIPs / 4;
    } else {
      this.imageWidth = screen.mainScreen.widthDIPs / 3;
    }
    this.radImagepicker = new RadImagepicker();
  }

  pickImage() {
    var opts: PickerOptions = {
      doneButtonTitle: "Finish",
      allowVideoSelection: false,
      noImagesTitle: "No images here :(",
      imageLimit: 5
    }
    
    this.radImagepicker.pick(opts).then((selectedImages) => {
      if (selectedImages) {
        this.images.length = 0;
        for (let i = 0; i < selectedImages.length; i++) {
          this.images.push({
            source: selectedImages[i]
          });
        }
        
        const repeaterView: Repeater = topmost().getViewById('repeaterView');
        repeaterView.items = this.images;

        (<any> topmost().getViewById('hint')).visibility = 'collapse';
      }
    });
  }
}
