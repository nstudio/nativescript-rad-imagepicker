import { Observable } from 'tns-core-modules/data/observable';

export class Common extends Observable {
  constructor() {
    super();
  }
}

export interface PickerOptions {
  doneButtonTitle?: string;
  noImagesTitle?: string;
  allowVideoSelection?: boolean;
  imageLimit?: number;
}
