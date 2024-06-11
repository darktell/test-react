import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

const Constraint: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "xl:w-[1180px] mx-auto px-2 md:px-4 xl:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Constraint;
