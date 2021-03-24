# NativeScript Rad Imagepicker Plugin ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

NativeScript plugin for whatsapp style image picking. 
This Plugin uses [PixImagePicker](https://github.com/akshay2211/PixImagePicker) for Android and [ImagePicker](https://github.com/hyperoslo/ImagePicker) for iOS

<img src="https://github.com/shiv19/nativescript-rad-imagepicker/blob/master/assets/demo-android.gif?raw=true" height="320" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/shiv19/nativescript-rad-imagepicker/blob/master/assets/demo-ios.gif" height="320" > 

## Installation

```javascript
tns plugin add @nstudio/nativescript-rad-imagepicker
```

## Usage 
	
```javascript
const RadImagepicker = require('@nstudio/nativescript-rad-imagepicker').RadImagepicker;
const PickerOptions = require('@nstudio/nativescript-rad-imagepicker').PickerOptions;
const radImagepicker = new RadImagepicker();
radImagepicker.pick(opts).then((selectedImages) => {
    if (selectedImages) {
        // Do something with selected images
        // currently 
        // the image will be of type nativescript image source
        // @nativescript/core/ui/image-source
    }
});
```

## API

Following picker options are available
```javascript
PickerOptions {
    doneButtonTitle?: string; // only affects ios
    noImagesTitle?: string; // only affects ios
    allowVideoSelection?: boolean; // only affects ios
    imageLimit?: number;
}
```

Picker api
```javascript
pick(options: PickerOptions): Promise<Array<any>>;
```

When the promise resolves, you will get array of imageSource

### Theming

#### Android
Add desired colors in `app/App_Resources/Android/src/main/res/values/colors.xml`
```xml
<color name="ns_blue">#272734</color>
<color name="colorPrimaryPix">#075e54</color>
<color name="colorPrimaryLightPix">#80075e54</color>
```

### Permissions

### Android

Make sure these lines are in your Manifest.xml

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-feature android:name="android.hardware.camera" />
```

### iOS

Add these to info.plist, you can add more descriptive message here
```xml
<key>NSCameraUsageDescription</key>
<string>This app uses your camera</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>This app uses your photo library</string>
```

----

Made With ♥️ for {N} Community by [nStudio](https://nstudio.io)

Special Thanks to [Richard Smith](https://github.com/dicksmith) and [Osei Fortune](https://github.com/triniwiz) :)
    
## License

Apache License Version 2.0, January 2004
