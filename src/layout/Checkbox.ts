import AbstractInputItem from "./AbstractInputItem";
import { LayoutProps } from "../types";

export default class Checkbox extends AbstractInputItem {
    layout: LayoutProps = {
        type: "checkbox",
        width: 1,
        height: 0.66,
        sizing: "none"
    };
}
