import cn from "classnames";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

import Portal from "./Portal";

export const modalAnimVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  onClose?: VoidFunction;
  wrapperStyle?: string;
  title?: string;
}

const Modal: FC<Props> = ({
  children,
  isOpen,
  onClose,
  wrapperStyle,
  title = "",
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className="w-full h-full bg-black/40 z-[1000] fixed top-0 flex items-center justify-center">
        <div
          className="w-full h-full fixed top-0 left-0 z-10"
          onClick={onClose}
        />
        <motion.div
          className={cn("z-[1000]", wrapperStyle)}
          aria-live="polite"
          role="dialog"
          aria-modal
          variants={modalAnimVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      </div>
    </Portal>
  );
};

export default Modal;
