import androidcontentContext = android.content.Context;
import androidviewViewGroup = android.view.ViewGroup;
import androidviewView = android.view.View;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.fxn.interfaces.OnSelectionListener.d.ts" />
/// <reference path="./com.fxn.modals.Img.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module fxn {
		export module adapters {
			export class InstantImageAdapter {
				public addImageList(param0): void;
				public getItemList();
				public clearList(): void;
				public getItemViewType(param0: number): number;
				public addOnSelectionListener(param0: com.fxn.interfaces.OnSelectionListener): void;
				public constructor(param0: androidcontentContext);
				public onCreateViewHolder(param0: androidviewViewGroup, param1: number);
				public onBindViewHolder(param0, param1: number): void;
				public addImage(param0: com.fxn.modals.Img): com.fxn.adapters.InstantImageAdapter;
				public select(param0: boolean, param1: number): void;
				public getItemCount(): number;
			}
			export module InstantImageAdapter {
				export class Holder {
					public onClick(param0: androidviewView): void;
					public onLongClick(param0: androidviewView): boolean;
				}
				export class HolderNone {
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.fxn.interfaces.OnSelectionListener.d.ts" />
/// <reference path="./com.fxn.modals.Img.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module fxn {
		export module adapters {
			export class MainImageAdapter {
				public static HEADER: number;
				public static ITEM: number;
				public static SPAN_COUNT: number;
				public getHeaderPositionForItem(param0: number): number;
				public clearList(): void;
				public addImage(param0: com.fxn.modals.Img): com.fxn.adapters.MainImageAdapter;
				public select(param0: boolean, param1: number): void;
				public getItemCount(): number;
				public bindHeaderData(param0: androidviewView, param1: number): void;
				public isHeader(param0: number): boolean;
				public getHeaderLayout(param0: number): number;
				public addImageList(param0): void;
				public getItemList();
				public getSectionMonthYearText(param0: number): string;
				public getItemViewType(param0: number): number;
				public getItemId(param0: number): number;
				public addOnSelectionListener(param0: com.fxn.interfaces.OnSelectionListener): void;
				public getSectionText(param0: number): string;
				public constructor(param0: androidcontentContext);
				public onCreateViewHolder(param0: androidviewViewGroup, param1: number);
				public onBindViewHolder(param0, param1: number): void;
			}
			export module MainImageAdapter {
				export class HeaderHolder {
				}
				export class Holder {
					public onClick(param0: androidviewView): void;
					public onLongClick(param0: androidviewView): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.fxn.modals.Img.d.ts" />
declare module com {
	export module fxn {
		export module interfaces {
			export class OnSelectionListener {
				/**
				 * Constructs a new instance of the com.fxn.interfaces.OnSelectionListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					OnClick(param0: com.fxn.modals.Img, param1: androidviewView, param2: number): void;
					OnLongClick(param0: com.fxn.modals.Img, param1: androidviewView, param2: number): void;
				});
				public OnLongClick(param0: com.fxn.modals.Img, param1: androidviewView, param2: number): void;
				public OnClick(param0: com.fxn.modals.Img, param1: androidviewView, param2: number): void;
			}
		}
	}
}

declare module com {
	export module fxn {
		export module interfaces {
			export class SectionIndexer {
				/**
				 * Constructs a new instance of the com.fxn.interfaces.SectionIndexer interface with the provided implementation.
				 */
				public constructor(implementation: {
					getSectionText(param0: number): string;
				});
				public getSectionText(param0: number): string;
			}
		}
	}
}

import javalangBoolean = java.lang.Boolean;
/// <reference path="./java.lang.Boolean.d.ts" />
declare module com {
	export module fxn {
		export module interfaces {
			export class WorkFinish {
				/**
				 * Constructs a new instance of the com.fxn.interfaces.WorkFinish interface with the provided implementation.
				 */
				public constructor(implementation: {
					onWorkFinish(param0: javalangBoolean): void;
				});
				public onWorkFinish(param0: javalangBoolean): void;
			}
		}
	}
}

/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module fxn {
		export module modals {
			export class Img {
				public setHeaderDate(param0: string): void;
				public getPosition(): number;
				public getUrl(): string;
				public setScrollerDate(param0: string): void;
				public getScrollerDate(): string;
				public constructor(param0: string, param1: string, param2: string, param3: string);
				public getContentUrl(): string;
				public getSelected(): javalangBoolean;
				public getHeaderDate(): string;
				public setSelected(param0: javalangBoolean): void;
				public setPosition(param0: number): void;
				public setContentUrl(param0: string): void;
				public setUrl(param0: string): void;
			}
		}
	}
}

declare module com {
	export module fxn {
		export module pix {
			export class BuildConfig {
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

import androidsupportv4appFragment = android.support.v4.app.Fragment;
import androidsupportv4appFragmentActivity = android.support.v4.app.FragmentActivity;
import androidosBundle = android.os.Bundle;
import androidviewMotionEvent = android.view.MotionEvent;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentActivity.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module fxn {
		export module pix {
			export class Pix {
				public static IMAGE_RESULTS: string;
				public static TOPBAR_HEIGHT: number;
				public static start(param0: androidsupportv4appFragment, param1: number, param2: number): void;
				public onCreate(param0: androidosBundle): void;
				public onBackPressed(): void;
				public onResume(): void;
				public onTouch(param0: androidviewView, param1: androidviewMotionEvent): boolean;
				public onPause(): void;
				public returnObjects(): void;
				public static start(param0: androidsupportv4appFragmentActivity, param1: number, param2: number): void;
				public static start(param0: androidsupportv4appFragmentActivity, param1: number): void;
				public static start(param0: androidsupportv4appFragment, param1: number): void;
				public constructor();
			}
		}
	}
}

import androidnetUri = android.net.Uri;
/// <reference path="./android.net.Uri.d.ts" />
declare module com {
	export module fxn {
		export module utility {
			export class Constants {
				public static sScrollbarAnimDuration: number;
				public static PROJECTION: native.Array<string>;
				public static URI: androidnetUri;
				public static ORDERBY: string;
				public constructor();
			}
		}
	}
}

import androidgraphicsCanvas = android.graphics.Canvas;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module fxn {
		export module utility {
			export class HeaderItemDecoration {
				public onDrawOver(param0: androidgraphicsCanvas, param1, param2): void;
				public constructor(param0: androidcontentContext, param1, param2: com.fxn.utility.HeaderItemDecoration.StickyHeaderInterface);
			}
			export module HeaderItemDecoration {
				export class StickyHeaderInterface {
					/**
					 * Constructs a new instance of the com.fxn.utility.HeaderItemDecoration$StickyHeaderInterface interface with the provided implementation.
					 */
					public constructor(implementation: {
						getHeaderPositionForItem(param0: number): number;
						getHeaderLayout(param0: number): number;
						bindHeaderData(param0: androidviewView, param1: number): void;
						isHeader(param0: number): boolean;
					});
					public isHeader(param0: number): boolean;
					public getHeaderPositionForItem(param0: number): number;
					public getHeaderLayout(param0: number): number;
					public bindHeaderData(param0: androidviewView, param1: number): void;
				}
			}
		}
	}
}

import androiddatabaseCursor = android.database.Cursor;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module fxn {
		export module utility {
			export class ImageFetcher {
				public doInBackground(param0: native.Array<androiddatabaseCursor>);
				public constructor(param0: androidcontentContext);
			}
		}
	}
}

/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentActivity.d.ts" />
/// <reference path="./com.fxn.interfaces.WorkFinish.d.ts" />
declare module com {
	export module fxn {
		export module utility {
			export abstract class PermUtil {
				public static REQUEST_CODE_ASK_MULTIPLE_PERMISSIONS: number;
				public static checkForCamara_WritePermissions(param0: androidsupportv4appFragment, param1: com.fxn.interfaces.WorkFinish): void;
				public constructor();
				public static checkForCamara_WritePermissions(param0: androidsupportv4appFragmentActivity, param1: com.fxn.interfaces.WorkFinish): void;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module fxn {
		export module utility {
			export class RegexUtil {
				public checkGif(param0: string): boolean;
				public constructor();
			}
		}
	}
}

import androidsupportv7appAppCompatActivity = android.support.v7.app.AppCompatActivity;
import androidappActivity = android.app.Activity;
import javautilCalendar = java.util.Calendar;
import androidviewViewPropertyAnimator = android.view.ViewPropertyAnimator;
import javaioFile = java.io.File;
import androidgraphicsBitmap = android.graphics.Bitmap;
import javautilList = java.util.List;
import javalangLong = java.lang.Long;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.support.v7.app.AppCompatActivity.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewPropertyAnimator.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module fxn {
		export module utility {
			export class Utility {
				public static HEIGHT: number;
				public static WIDTH: number;
				public static manipulateVisibility(param0: androidsupportv7appAppCompatActivity, param1: number, param2, param3, param4: androidviewView, param5: androidviewView, param6: androidviewView, param7: androidviewView, param8: boolean): void;
				public static getSoftButtonsBarSizePort(param0: androidappActivity): number;
				public static getValueInRange(param0: number, param1: number, param2: number): number;
				public static getExifCorrectedBitmap(param0: javaioFile): androidgraphicsBitmap;
				public static showStatusBar(param0: androidsupportv7appAppCompatActivity): void;
				public static convertPixelsToDp(param0: number, param1: androidcontentContext): number;
				public static vibe(param0: androidcontentContext, param1: number): void;
				public static isViewVisible(param0: androidviewView): boolean;
				public static getCursor(param0: androidcontentContext): androiddatabaseCursor;
				public constructor();
				public static hideStatusBar(param0: androidsupportv7appAppCompatActivity): void;
				public static cancelAnimation(param0: androidviewViewPropertyAnimator): void;
				public static setupStatusBarHidden(param0: androidsupportv7appAppCompatActivity): void;
				public getPathDir(param0: javalangLong): string;
				public static showScrollbar(param0: androidviewView, param1: androidcontentContext): androidviewViewPropertyAnimator;
				public getImagesFromGallary(param0: androidcontentContext);
				public static getScaledBitmap(param0: number, param1: androidgraphicsBitmap): androidgraphicsBitmap;
				public static getScreenSize(param0: androidappActivity): void;
				public static isNull(param0: androidviewView): boolean;
				public static writeImage(param0: native.Array<number>): javaioFile;
				public static getDateDifference(param0: androidcontentContext, param1: javautilCalendar): string;
				public static convertDpToPixel(param0: number, param1: androidcontentContext): number;
			}
		}
	}
}

/// <reference path="./com.fxn.pix.Pix.d.ts" />
declare module com {
	export module fxn {
		export module utility {
			export module ui {
				export class FastScrollStateChangeListener {
					/**
					 * Constructs a new instance of the com.fxn.utility.ui.FastScrollStateChangeListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onFastScrollStart(param0: com.fxn.pix.Pix): void;
						onFastScrollStop(param0: com.fxn.pix.Pix): void;
					});
					public onFastScrollStart(param0: com.fxn.pix.Pix): void;
					public onFastScrollStop(param0: com.fxn.pix.Pix): void;
				}
			}
		}
	}
}

