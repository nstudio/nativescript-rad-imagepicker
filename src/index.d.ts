import { Common } from './rad-imagepicker.common';
export interface PickerOptions {
    doneButtonTitle?: string;
    noImagesTitle?: string;
    allowVideoSelection?: boolean;
    imageLimit?: number;
}

export declare class RadImagepicker extends Common {
    pick(options?: PickerOptions): Promise<Array<any>>;
}
