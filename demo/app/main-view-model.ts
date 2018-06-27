import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { RadImagepicker } from 'nativescript-rad-imagepicker';

export class HelloWorldModel extends Observable {
  public images;
  private radImagepicker: RadImagepicker;

  constructor() {
    super();

    this.images = new ObservableArray([]);
    this.radImagepicker = new RadImagepicker();
  }

  pickImage() {
    this.radImagepicker.pick({
      done: (selectedImages) => {
        this.images.length = 0;
        for (let i = 0; i < selectedImages.length; i++) {
          this.images.push({
            src: selectedImages[i]
          });
        }
      }
    });
  }
}
