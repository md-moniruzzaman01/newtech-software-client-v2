import { FC } from "react";
import { ButtonProps } from "../../../shared/config/types";
import { cx } from "../../../shared/config/constaints";
//

const Button: FC<ButtonProps> = ({
  className = "",
  translate = "",
  sizeClass = "px-[20px] py-[7.5px]",
  fontSize = "text-[16px]",
  disabled = false,
  children,
  type,
  loading,
  secondary,
  status,
  primary,
  ghost,
  btn_outline,
  onClick = () => {},
}) => {
  const CLASSES = `
        relative text-white h-auto bg-primary inline-flex items-center justify-center rounded-[4px] transition-all font-medium hover:bg-primary-dark duration-300	
        ${disabled && "!bg-primary/50 hover:!bg-disable cursor-not-allowed"} 
        ${loading && "cursor-not-allowed !bg-disable hover:!bg-disable"}
        ${fontSize} 
        ${sizeClass} 
        ${translate}
        ${className} 
    `;

  const SECONDARY_CLASS = `bg-transparent outline outline-[1.7px] text-primary outline-primary hover:!text-white hover:bg-primary`;
  const STATUS_CLASS = `shadow-md bg-white py-2 px-5 text-xl hover:bg-primary hover:!text-white !text-gray-900 rounded-sm`;
  const btn_primary =
    "px-5 hover:!bg-primary  !bg-[#0074D9] !text-[#fff] border-0 text-lg rounded-sm font-normal rounded-[4px]";
  const btn_ghost =
    " px-5 hover:!bg-primary  !bg-[#D9D9D9] !text-solidBlack border-0 text-lg rounded-sm font-normal";

  const btn_outline_style =
    "bg-transparent !text-black hover:!text-gray-400 outline rounded-full !py-0 !px-3";

  const _renderLoading = () => {
    return (
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  };

  return (
    <button
      disabled={disabled || loading}
      className={cx(
        CLASSES,
        secondary && SECONDARY_CLASS,
        status && STATUS_CLASS,
        primary && btn_primary,
        ghost && btn_ghost,
        btn_outline && btn_outline_style
      )}
      onClick={onClick}
      type={type}
    >
      {loading && _renderLoading()}
      {children || `This is Button`}
    </button>
  );
};

export default Button;
