import { Observable } from 'tns-core-modules/data/observable';
import { RadImagepicker } from 'nativescript-rad-imagepicker';

export class HelloWorldModel extends Observable {
  public message: string;
  private radImagepicker: RadImagepicker;

  constructor() {
    super();

    this.radImagepicker = new RadImagepicker();
    this.message = this.radImagepicker.message;
  }
}
