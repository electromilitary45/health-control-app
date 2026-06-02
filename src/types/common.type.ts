import type { ReactNode } from "react";

export type BaseComponentProps = {
    className?: string;
    children?: ReactNode;
};

export type SelectOption<TValue extends string = string> = {
    label: string;
    value: TValue;
};