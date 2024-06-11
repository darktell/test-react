import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { twMerge } from "tailwind-merge";

import { VARIANT, variantStyle } from "./Button";

export type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  variant?: VARIANT;
};

const LinkButton: FC<Props> = ({ variant, href, ...props }) => {
  const className = twMerge("block", variantStyle(variant), props.className);

  return (
    <a {...props} className={className} href={href}>
      {props.children}
    </a>
  );
};

export default LinkButton;
