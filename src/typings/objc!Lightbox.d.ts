
declare class FooterView extends UIView {

	static alloc(): FooterView; // inherited from NSObject

	static appearance(): FooterView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FooterView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FooterView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): FooterView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FooterView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): FooterView; // inherited from UIAppearance

	static new(): FooterView; // inherited from NSObject

	configureLayout(): void;
}

declare class HeaderView extends UIView {

	static alloc(): HeaderView; // inherited from NSObject

	static appearance(): HeaderView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): HeaderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HeaderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): HeaderView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HeaderView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): HeaderView; // inherited from UIAppearance

	static new(): HeaderView; // inherited from NSObject

	configureLayout(): void;
}

declare class InfoLabel extends UILabel {

	static alloc(): InfoLabel; // inherited from NSObject

	static appearance(): InfoLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): InfoLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): InfoLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): InfoLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): InfoLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): InfoLabel; // inherited from UIAppearance

	static new(): InfoLabel; // inherited from NSObject

	configureLayout(): void;
}

declare class LightboxConfig extends NSObject {

	static alloc(): LightboxConfig; // inherited from NSObject

	static new(): LightboxConfig; // inherited from NSObject

	static setHandleVideo(value: (p1: UIViewController, p2: NSURL) => void): void;

	static setHideStatusBar(value: boolean): void;

	static setLoadImage(value: (p1: UIImageView, p2: NSURL, p3: (p1: UIImage) => void) => void): void;

	static setMakeLoadingIndicator(value: () => UIView): void;

	static handleVideo: (p1: UIViewController, p2: NSURL) => void;

	static hideStatusBar: boolean;

	static loadImage: (p1: UIImageView, p2: NSURL, p3: (p1: UIImage) => void) => void;

	static makeLoadingIndicator: () => UIView;
}

declare class LightboxController extends UIViewController implements UIScrollViewDelegate {

	static alloc(): LightboxController; // inherited from NSObject

	static new(): LightboxController; // inherited from NSObject

	readonly currentPage: number;

	dismissalDelegate: LightboxControllerDismissalDelegate;

	dynamicBackground: boolean;

	readonly footerView: FooterView;

	readonly headerView: HeaderView;

	imageTouchDelegate: LightboxControllerTouchDelegate;

	images: NSArray<LightboxImage>;

	readonly numberOfPages: number;

	readonly overlayView: UIView;

	pageDelegate: LightboxControllerPageDelegate;

	readonly presented: boolean;

	readonly seen: boolean;

	spacing: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { images: NSArray<LightboxImage>; startIndex: number; });

	class(): typeof NSObject;

	configureLayout(size: CGSize): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	footerViewDidExpand(footerView: FooterView, expanded: boolean): void;

	goToAnimated(page: number, animated: boolean): void;

	initWithImagesStartIndex(images: NSArray<LightboxImage>, index: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	next(animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	previous(animated: boolean): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface LightboxControllerDismissalDelegate {

	lightboxControllerWillDismiss(controller: LightboxController): void;
}
declare var LightboxControllerDismissalDelegate: {

	prototype: LightboxControllerDismissalDelegate;
};

interface LightboxControllerPageDelegate {

	lightboxControllerDidMoveToPage(controller: LightboxController, page: number): void;
}
declare var LightboxControllerPageDelegate: {

	prototype: LightboxControllerPageDelegate;
};

interface LightboxControllerTouchDelegate {

	lightboxControllerDidTouchAt(controller: LightboxController, image: LightboxImage, index: number): void;
}
declare var LightboxControllerTouchDelegate: {

	prototype: LightboxControllerTouchDelegate;
};

declare class LightboxImage extends NSObject {

	static alloc(): LightboxImage; // inherited from NSObject

	static new(): LightboxImage; // inherited from NSObject

	readonly image: UIImage;

	readonly imageClosure: () => UIImage;

	readonly imageURL: NSURL;

	text: string;

	readonly videoURL: NSURL;

	constructor(o: { image: UIImage; text: string; videoURL: NSURL; });

	addImageToCompletion(imageView: UIImageView, completion: (p1: UIImage) => void): void;

	initWithImageClosureTextVideoURL(imageClosure: () => UIImage, text: string, videoURL: NSURL): this;

	initWithImageTextVideoURL(image: UIImage, text: string, videoURL: NSURL): this;

	initWithImageURLTextVideoURL(imageURL: NSURL, text: string, videoURL: NSURL): this;
}

declare var LightboxVersionNumber: number;

declare var LightboxVersionString: interop.Reference<number>;
