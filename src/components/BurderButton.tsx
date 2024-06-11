import cn from "classnames";
import React, { Dispatch, FC, SetStateAction } from "react";

const LINE_CLASS_NAME = "absolute left-1/4 top-1/2 w-6 bg-white h-0.5 ease-out";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const BurgerButton: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className="bg-accent-primary h-12 w-12 relative rounded-lg cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        className={cn(LINE_CLASS_NAME, "duration-200 translate-y-2", {
          "!w-0 left-1/2": isOpen,
        })}
      />
      <div
        className={cn(LINE_CLASS_NAME, "duration-300", {
          "rotate-45": isOpen,
        })}
      />
      <div
        className={cn(LINE_CLASS_NAME, "duration-300", {
          "-rotate-45": isOpen,
        })}
      />
      <div
        className={cn(LINE_CLASS_NAME, "duration-200  -translate-y-2", {
          "!w-0 left-1/2": isOpen,
        })}
      />
    </div>
  );
};

export default BurgerButton;
