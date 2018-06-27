import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { RadImagepicker, PickerOptions } from 'nativescript-rad-imagepicker';

export class HelloWorldModel extends Observable {
  public images = [];
  private radImagepicker: RadImagepicker;

  constructor() {
    super();
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
            src: selectedImages[i]
          });
        }
        console.log(this.images);
        this.set('selectedImages',this.images)
      }
    });
  }
}
