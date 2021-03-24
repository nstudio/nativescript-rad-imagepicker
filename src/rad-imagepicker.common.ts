import { Observable } from '@nativescript/core';

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
