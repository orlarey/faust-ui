export interface IItem {
    /**
     * Initial type of item given by Faust compiler
     *
     * @type {TFaustUIType}
     * @memberof IItem
     */
    type: TFaustUIType;
    /**
     * Initial item label given by Faust compiler
     *
     * @type {string}
     * @memberof IItem
     */
    label: string;
    /**
     * Calculated layout
     *
     * @type {TLayoutProp}
     * @memberof IItem
     */
    layout: TLayoutProp;
}