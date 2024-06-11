import cn from "classnames";
import { useState } from "react";
import { ReactComponent as PlusIcon } from "src/assets/icons/plus.svg";

interface Props {
  image?: string;
  label: string;
}

const ProductSlide = ({ image, label }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sm:w-[270px]">
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="rounded-xl relative cursor-pointer "
      >
        <img alt="slide" className="w-full" src={image} />

        <div
          className={cn(
            "absolute bg-primary/40  top-0 rounded-lg w-full h-full z-[10] opacity-0 transition duration-150",
            {
              "opacity-100": isHovered,
            },
          )}
        >
          <PlusIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <p className="absolute z-[50] bottom-0 w-full text-center text-primary font-medium rounded-b-xl py-4 bg-darkGray/50">
          {label}
        </p>
      </div>

      <p className="text-[13px] text-gray text-center p-6">
        Nunc cursus libero purus ac congue arcu cursus ut sed vitae pul copy
        Nunc cursus libero purus ac congue arcu cursus ut sed vitae pul copy
      </p>
    </div>
  );
};

export default ProductSlide;
