// Generated by dts-bundle-generator v9.3.1

import { FaustUIDescriptor, FaustUIGroupType, FaustUIInputItem, FaustUIInputType, FaustUIItem, FaustUIMeta, FaustUIOutputType, FaustUIType } from '@grame/faustwasm';

declare const $AnyEventType: unique symbol;
export interface IEmitOptions {
	excludeAny?: boolean;
	exclude?: ((...args: any[]) => any)[];
}
declare class TypedEventEmitter<M> {
	private _listeners;
	get listeners(): {
		[eventName: string]: ((e?: any, emitter?: any) => any)[];
		[$AnyEventType]: ((eventName: string, eventData?: any, emitter?: any) => any)[];
	};
	private getListeners;
	on<K extends keyof M & string>(eventName: K, listener: (e: M[K], emitter?: this) => any): void;
	once<K extends keyof M & string>(eventName: K, listener: (e: M[K], emitter?: this) => any): void;
	onAny<K extends keyof M & string>(listener: <KK extends K>(eventName: KK, eventData?: M[KK], emitter?: this) => any): void;
	off<K extends keyof M & string>(eventName: K, listener: (e: M[K], emitter?: this) => any): void;
	offAny<K extends keyof M & string>(listener: <KK extends K>(eventName: KK, eventData?: M[KK], emitter?: this) => any): void;
	emit<K extends keyof M & string>(eventName: K, eventData?: M[K], options?: IEmitOptions): Promise<any[]>;
	emitSerial<K extends keyof M & string>(eventName: K, eventData?: M[K], options?: IEmitOptions): Promise<any[]>;
	emitSync<K extends keyof M & string>(eventName: K, eventData?: M[K], options?: IEmitOptions): any[];
	offAll(eventName?: keyof M & string): void;
	listenerCount(eventName: keyof M & string): number;
}
declare abstract class AbstractComponent<T extends {
	[key: string]: any;
}> extends TypedEventEmitter<T> {
	/**
	 * The default state of the component.
	 */
	static defaultProps: Record<string, any>;
	get defaultProps(): T;
	/**
	 * Here stores corrent state of component
	 * change the state with `setState` method to fire state events
	 * then UI parts will get notified and rerender
	 */
	state: T;
	/**
	 * Frame count in order to reduce frame rate
	 */
	private $frame;
	/**
	 * Frame reducing factor, 1 = render at every browser rendering tick, 2 will skip one every two ticks.
	 */
	frameReduce: number;
	/**
	 * Here stores current `requestAnimationFrame` reference
	 * if we have a new state to render, we cancel the old one
	 */
	private $raf;
	/**
	 * `requestAnimationFrame` callback
	 */
	private raf;
	/**
	 * tasks to execute in next redering tick
	 */
	private tasks;
	/**
	 * Initiate default state with incoming state.
	 */
	constructor(props?: T);
	/**
	 * set internal state and fire events for UI parts subscribed
	 */
	setState(newState: Partial<T>): void;
	/**
	 * Use this method to request a new rendering
	 * schedule what you need to do in next render tick in `raf` callback
	 */
	schedule(func: () => any): void;
}
export interface FaustUIItemProps<T extends FaustUIItemStyle> {
	value?: number;
	active?: boolean;
	focus?: boolean;
	label?: string;
	address: string;
	min?: number;
	max?: number;
	step?: number;
	tooltip?: string;
	enums?: {
		[key: string]: number;
	};
	type?: "enum" | "int" | "float";
	unit?: string;
	scale?: "linear" | "exp" | "log";
	style?: T;
	emitter?: FaustUI;
}
export interface FaustUIGroupProps {
	label?: string;
	type?: "tgroup" | "vgroup" | "hgroup";
	style?: FaustUIItemStyle;
	items?: FaustUIItem[];
	isRoot?: boolean;
	emitter?: FaustUI;
}
export interface FaustUIItemStyle {
	width?: number;
	height?: number;
	left?: number;
	top?: number;
	grid?: number;
	labelcolor?: string;
}
export interface PointerDownEvent {
	x: number;
	y: number;
	originalEvent: MouseEvent | TouchEvent;
}
export interface PointerDragEvent {
	prevValue: number;
	x: number;
	y: number;
	fromX: number;
	fromY: number;
	movementX: number;
	movementY: number;
	originalEvent: MouseEvent | TouchEvent;
}
export interface PointerUpEvent {
	x: number;
	y: number;
	originalEvent: MouseEvent | TouchEvent;
}
declare abstract class AbstractItem<T extends FaustUIItemStyle> extends AbstractComponent<FaustUIItemProps<T>> {
	/**
	 * The default state of the component.
	 */
	static defaultProps: FaustUIItemProps<FaustUIItemStyle>;
	/**
	 * DOM Div container of the component
	 */
	container: HTMLDivElement;
	/**
	 * DOM Div container of label canvas
	 */
	label: HTMLDivElement;
	/**
	 * Use canvas as label to fit full text in.
	 */
	labelCanvas: HTMLCanvasElement;
	labelCtx: CanvasRenderingContext2D;
	/**
	 * Override this to get css work
	 */
	className: string;
	frameReduce: number;
	/**
	 * Default DOM event listeners, unify mousedown and touchstart events
	 * For mouse or touch events, please use `handlePointerDown` `handlePointerUp` `handlePointerDrag` callbacks
	 */
	handleKeyDown: (e: KeyboardEvent) => void;
	handleKeyUp: (e: KeyboardEvent) => void;
	handleTouchStart: (e: TouchEvent) => void;
	handleWheel: (e: WheelEvent) => void;
	handleClick: (e: MouseEvent) => void;
	handleMouseDown: (e: MouseEvent) => void;
	handleMouseOver: (e: MouseEvent) => void;
	handleMouseOut: (e: MouseEvent) => void;
	handleContextMenu: (e: MouseEvent) => void;
	handlePointerDown: (e: PointerDownEvent) => void;
	handlePointerDrag: (e: PointerDragEvent) => void;
	handlePointerUp: (e: PointerUpEvent) => void;
	handleFocusIn: (e: FocusEvent) => boolean;
	handleFocusOut: (e: FocusEvent) => boolean;
	/**
	 * Initiate default state with incoming state.
	 */
	constructor(props?: FaustUIItemProps<T>);
	/**
	 * Get a nearest valid number
	 */
	toValidNumber(value: number): number;
	/**
	 * Use this method if you want the emitter to send value to DSP
	 */
	setValue(valueIn: number): boolean;
	/**
	 * Send value to DSP
	 */
	change(valueIn?: number): void;
	/**
	 * set internal state and fire events for UI parts subscribed
	 * This will not send anything to DSP
	 * @returns is state updated
	 */
	setState(newState: {
		[key in keyof FaustUIItemProps<T>]?: FaustUIItemProps<T>[key];
	}): boolean;
	/**
	 * Create container with class name
	 * override it with `super.componentWillMount();`
	 */
	componentWillMount(): this;
	/**
	 * Here append all child DOM to container
	 */
	mount(): this;
	paintLabel(align?: CanvasTextAlign): this;
	/**
	 * will call this method when mounted
	 */
	componentDidMount(): this;
	/**
	 * Count steps in range min-max with step
	 */
	get stepsCount(): number;
	/**
	 * Normalized value between 0 - 1.
	 */
	get distance(): number;
	static getDistance(state: {
		value: number;
		min: number;
		max: number;
		enums?: {
			[key: string]: number;
		};
		type: "enum" | "int" | "float";
		scale: "linear" | "exp" | "log";
	}): number;
	/**
	 * Mousemove pixels for each step
	 */
	get stepRange(): number;
}
export interface FaustUINentryStyle extends FaustUIItemStyle {
	fontname?: string;
	fontsize?: number;
	fontface?: "regular" | "bold" | "italic" | "bold italic";
	bgcolor?: string;
	bordercolor?: string;
	labelcolor?: string;
	textcolor?: string;
}
declare class Nentry extends AbstractItem<FaustUINentryStyle> {
	static get defaultProps(): FaustUIItemProps<FaustUINentryStyle>;
	className: string;
	input: HTMLInputElement;
	componentWillMount(): this;
	handleChange: (e: Event) => void;
	setStyle: () => void;
	componentDidMount(): this;
	mount(): this;
}
export interface FaustUISliderStyle extends FaustUINentryStyle {
	sliderwidth?: number;
	sliderbgcolor?: string;
	sliderbgoncolor?: string;
	slidercolor?: string;
}
declare class VSlider extends AbstractItem<FaustUISliderStyle> {
	static get defaultProps(): FaustUIItemProps<FaustUISliderStyle>;
	className: string;
	canvas: HTMLCanvasElement;
	inputNumber: HTMLInputElement;
	input: HTMLInputElement;
	flexDiv: HTMLDivElement;
	canvasDiv: HTMLDivElement;
	ctx: CanvasRenderingContext2D;
	interactionRect: number[];
	componentWillMount(): this;
	handleChange: (e: Event) => void;
	setStyle: () => void;
	componentDidMount(): this;
	mount(): this;
	paint: () => void;
	get stepsCount(): number;
	get stepRange(): number;
	getValueFromPos(e: {
		x: number;
		y: number;
	}): number;
	handlePointerDown: (e: PointerDownEvent) => void;
	handlePointerDrag: (e: PointerDragEvent) => void;
}
export interface FaustUIButtonStyle extends FaustUIItemStyle {
	fontname?: string;
	fontsize?: number;
	fontface?: "normal" | "bold" | "italic" | "bold italic";
	bgcolor?: string;
	bgoncolor?: string;
	bordercolor?: string;
	borderoncolor?: string;
	textcolor?: string;
	textoncolor?: string;
}
declare class Button extends AbstractItem<FaustUIButtonStyle> {
	static get defaultProps(): FaustUIItemProps<FaustUIButtonStyle>;
	className: string;
	btn: HTMLDivElement;
	span: HTMLSpanElement;
	componentWillMount(): this;
	setStyle: () => void;
	mount(): this;
	componentDidMount(): this;
	handlePointerDown: () => void;
	handlePointerUp: () => void;
}
export interface FaustUIKnobStyle extends FaustUINentryStyle {
	knobwidth?: number;
	knobcolor?: string;
	knoboncolor?: string;
	needlecolor?: string;
}
declare class Knob extends AbstractItem<FaustUIKnobStyle> {
	static get defaultProps(): FaustUIItemProps<FaustUIKnobStyle>;
	className: string;
	canvas: HTMLCanvasElement;
	inputNumber: HTMLInputElement;
	input: HTMLInputElement;
	ctx: CanvasRenderingContext2D;
	componentWillMount(): this;
	handleChange: (e: Event) => void;
	setStyle: () => void;
	componentDidMount(): this;
	mount(): this;
	paint: () => void;
	getValueFromDelta(e: PointerDragEvent): number;
	handlePointerDrag: (e: PointerDragEvent) => void;
}
export interface FaustUIMenuStyle extends FaustUIItemStyle {
	fontname?: string;
	fontsize?: number;
	fontface?: "regular" | "bold" | "italic" | "bold italic";
	bgcolor?: string;
	bordercolor?: string;
	labelcolor?: string;
	textcolor?: string;
}
declare class Menu extends AbstractItem<FaustUIMenuStyle> {
	static get defaultProps(): FaustUIItemProps<FaustUIMenuStyle>;
	className: string;
	select: HTMLSelectElement;
	componentWillMount(): this;
	getOptions(): void;
	handleChange: (e: Event) => void;
	setStyle: () => void;
	componentDidMount(): this;
	mount(): this;
}
export interface FaustUIRadioStyle extends FaustUIItemStyle {
	fontname?: string;
	fontsize?: number;
	fontface?: "regular" | "bold" | "italic" | "bold italic";
	bgcolor?: string;
	bordercolor?: string;
	labelcolor?: string;
	textcolor?: string;
}
declare class Radio extends AbstractItem<FaustUIRadioStyle> {
	static get defaultProps(): FaustUIItemProps<FaustUIRadioStyle>;
	className: string;
	group: HTMLDivElement;
	componentWillMount(): this;
	getOptions: () => void;
	setStyle: () => void;
	componentDidMount(): this;
	mount(): this;
}
export interface FaustUILedStyle extends FaustUINentryStyle {
	shape?: "circle" | "square";
	ledbgcolor?: string;
	coldcolor?: string;
	warmcolor?: string;
	hotcolor?: string;
	overloadcolor?: string;
}
declare class Led extends AbstractItem<FaustUILedStyle> {
	static get defaultProps(): FaustUIItemProps<FaustUILedStyle>;
	className: string;
	canvasDiv: HTMLDivElement;
	canvas: HTMLCanvasElement;
	tempCanvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	tempCtx: CanvasRenderingContext2D;
	componentWillMount(): this;
	setStyle: () => void;
	componentDidMount(): this;
	mount(): this;
	paint: () => void;
}
declare class Numerical extends AbstractItem<FaustUINentryStyle> {
	static get defaultProps(): FaustUIItemProps<FaustUINentryStyle>;
	className: string;
	input: HTMLInputElement;
	componentWillMount(): this;
	setStyle: () => void;
	componentDidMount(): this;
	mount(): this;
}
export interface FaustUIBargraphStyle extends FaustUINentryStyle {
	barwidth?: number;
	barbgcolor?: string;
	coldcolor?: string;
	warmcolor?: string;
	hotcolor?: string;
	overloadcolor?: string;
}
declare class VBargraph extends AbstractItem<FaustUIBargraphStyle> {
	static get defaultProps(): FaustUIItemProps<FaustUIBargraphStyle>;
	className: string;
	canvas: HTMLCanvasElement;
	input: HTMLInputElement;
	flexDiv: HTMLDivElement;
	canvasDiv: HTMLDivElement;
	ctx: CanvasRenderingContext2D;
	componentWillMount(): this;
	setStyle: () => void;
	componentDidMount(): this;
	mount(): this;
	paintValue: number;
	maxValue: number;
	maxTimer: number;
	paint: () => void;
}
export interface LayoutProps {
	type: TLayoutType;
	left?: number;
	top?: number;
	offsetLeft?: number; // relative to parent group
	offsetTop?: number;
	width: number;
	height: number;
	sizing: "horizontal" | "vertical" | "both" | "none";
}
export type TLayoutType = "vgroup" | "hgroup" | "tgroup" | "hbargraph" | "vbargraph" | "vslider" | "hslider" | "button" | "checkbox" | "nentry" | "knob" | "menu" | "radio" | "led" | "numerical";
export interface IItem {
	/**
	 * Initial type of item given by Faust compiler
	 */
	type: FaustUIType;
	/**
	 * Initial item label given by Faust compiler
	 */
	label: string;
	/**
	 * Calculated layout
	 */
	layout: LayoutProps;
	/**
	 * Adjust group width and height by its items' dimensions
	 */
	adjust(): this;
	/**
	 * Expand flexible items within a group
	 *
	 * @param dX - Extra horizontal spaces that this group could take
	 * @param dY - Extra vertical spaces that this group could take
	 */
	expand(dX: number, dY: number): this;
	/**
	 * calculate all the items' absolute coordination (in grids)
	 */
	offset(): this;
}
declare abstract class AbstractItem$1 implements IItem {
	type: FaustUIInputType | FaustUIOutputType;
	label: string;
	address: string;
	index: number;
	init: number;
	min: number;
	max: number;
	meta?: FaustUIMeta[];
	layout: LayoutProps;
	constructor(item: FaustUIItem);
	adjust(): this;
	expand(dX: number, dY: number): this;
	offset(): this;
}
declare abstract class AbstractGroup implements IItem {
	static padding: number;
	static labelHeight: number;
	static spaceBetween: number;
	isRoot: boolean;
	type: FaustUIGroupType;
	label: string;
	items: (AbstractGroup | AbstractItem$1)[];
	layout: LayoutProps;
	constructor(group: {
		type: FaustUIGroupType;
		label: string;
		items: (AbstractGroup | AbstractItem$1)[];
	}, isRoot?: boolean);
	/**
	 * find recursively if the group has horizontal-sizable item
	 */
	get hasHSizingDesc(): boolean;
	/**
	 * find recursively if the group has vertical-sizable item
	 */
	get hasVSizingDesc(): boolean;
	adjust(): this;
	expand(dX: number, dY: number): this;
	offset(): this;
}
declare abstract class AbstractInputItem extends AbstractItem$1 {
	init: number;
	step: number;
	constructor(item: FaustUIInputItem);
}
declare abstract class AbstractOutputItem extends AbstractItem$1 {
}
declare class Group extends AbstractComponent<FaustUIGroupProps> {
	static parseMeta(metaIn: FaustUIMeta[]): {
		metaObject: FaustUIMeta;
		enums?: {
			[key: string]: number;
		};
	};
	static getComponent(item: AbstractGroup | AbstractInputItem | AbstractOutputItem, emitter: FaustUI, grid: number): Nentry | VSlider | Button | Knob | Menu | Radio | Led | Numerical | VBargraph | Group;
	/**
	 * DOM Div container of the group
	 */
	container: HTMLDivElement;
	/**
	 * DOM Div container of label canvas
	 */
	label: HTMLDivElement;
	/**
	 * Use canvas as label to fit full text in.
	 */
	labelCanvas: HTMLCanvasElement;
	labelCtx: CanvasRenderingContext2D;
	tabs: HTMLDivElement;
	children: (AbstractItem<FaustUIItemStyle> | Group)[];
	layout: LayoutProps;
	setState(newState: {
		[key in keyof FaustUIGroupProps]?: FaustUIGroupProps[key];
	}): void;
	componentWillMount(): this;
	paintLabel(): this;
	updateUI: () => void;
	mount(): this;
	componentDidMount(): this;
}
export interface IOptions {
	root: HTMLDivElement;
	ui?: FaustUIDescriptor;
	listenWindowResize?: boolean;
	listenWindowMessage?: boolean;
}
/**
 * The main class of UI constructor,
 * listening to `resize` window event to resize component,
 * listening to `message` window event to change UI or param value.
 * See readme.
 */
export declare class FaustUI {
	componentMap: {
		[path: string]: AbstractItem<any>[];
	};
	DOMroot: HTMLDivElement;
	faustUIRoot: Group;
	hostWindow: Window;
	grid: number;
	private _ui;
	private _layout;
	/**
	 * Calculate incoming UI's layout, bind window events
	 */
	constructor(options: IOptions);
	/**
	 * Render the UI to DOM root
	 */
	mount(): void;
	/**
	 * This method should be called by components to register itself to map.
	 */
	register(path: string, item: AbstractItem<any>): void;
	/**
	 * Notify the component to change its value.
	 */
	paramChangeByDSP(path: string, value: number): void;
	/**
	 * Can be overriden, called by components when its value is changed by user.
	 */
	paramChangeByUI: (path: string, value: number) => void;
	/**
	 * Calculate UI layout in grid then calculate grid size.
	 */
	calc(): void;
	/**
	 * Calculate grid size by DOM root size and layout size in grids.
	 */
	calcGrid(): number;
	/**
	 * Force recalculate grid size and resize UI
	 */
	resize(): void;
	get ui(): FaustUIItem[];
	set ui(uiIn: FaustUIItem[]);
	get layout(): LayoutProps;
	get minWidth(): number;
	get minHeight(): number;
}
export declare const instantiate: () => void;

export {};
