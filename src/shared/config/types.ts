import { ButtonHTMLAttributes, ReactNode } from "react";

// button props
export type ButtonProps = {
    className?: string;
    translate?: string;
    sizeClass?: string;
    fontSize?: string;
    //
    loading?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    status?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: () => void;
    children?: ReactNode;
    icon?: string;
  };
  