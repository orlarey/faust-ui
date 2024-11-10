import AbstractOutputItem from "./AbstractOutputItem";
import type { LayoutProps } from "../types";

export default class Led extends AbstractOutputItem {
    layout: LayoutProps = {
        type: "led",
        width: 0.25,
        height: 0.25,
        sizing: "none"
    };
}
