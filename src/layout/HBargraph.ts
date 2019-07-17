import { AbstractOutputItem } from "./AbstractInputItem";

export class HBargraph extends AbstractOutputItem {
    layout: TLayoutProp = {
        type: "hbargraph",
        width: 5,
        height: 1,
        sizing: "horizontal"
    };
}
