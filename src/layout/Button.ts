import AbstractInputItem from "./AbstractInputItem";
import { LayoutProps } from "../types";

export default class Button extends AbstractInputItem {
    layout: LayoutProps = {
        type: "button",
        width: 1,
        height: 1,
        sizing: "none"
    };
}
