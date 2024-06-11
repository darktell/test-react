import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { twMerge } from "tailwind-merge";

export enum VARIANT {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUBMIT = "submit",
}

export const variantStyle = (value?: VARIANT) => {
  switch (value) {
    case VARIANT.PRIMARY:
      return "text-white hover:text-primary bg-primary shadow-lightButton border border-primary hover:bg-white rounded-lg py-5 px-[50px] font-medium";
    case VARIANT.SECONDARY:
      return "text-primary hover:text-white bg-white shadow-lightButton border border-primary hover:bg-primary rounded-lg py-5 px-[50px] font-medium";
    case VARIANT.SUBMIT:
      return "text-primary bg-darkGray shadow-blackButton hover:bg-darkGray/80 rounded-lg py-4 px-6";
    default:
      return "";
  }
};

export type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: VARIANT;
};

const Button: FC<Props> = ({ variant, ...props }) => {
  const className = twMerge(
    "disabled:cursor-not-allowed text-[15px] font-medium",
    variantStyle(variant),
    props.className,
  );

  return (
    <button {...props} className={className} type={props?.type || "button"}>
      {props.children}
    </button>
  );
};

export default Button;
