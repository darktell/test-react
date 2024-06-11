import cn from "classnames";
import { FC, useState } from "react";

interface Props {
  icon?: FC;
  label: string;
}

const FeatureElement: FC<Props> = ({ icon: Icon, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sm:w-1/2 md:w-[220px] ">
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="relative cursor-pointer flex flex-col items-center"
      >
        <div
          className={cn(
            "rounded-full p-6 flex items-center justify-center bg-primary w-[160px] h-[160px] transition duration-150",
            { "!bg-gray": isHovered },
          )}
        >
          <Icon />
        </div>

        <p
          className={cn(
            "w-full text-center text-gray font-medium py-4 transition duration-150",
            {
              "!text-primary": isHovered,
            },
          )}
        >
          {label.toUpperCase()}
        </p>
      </div>

      <p className="text-[13px] text-gray text-center p-6">
        Nunc cursus libero purus ac congue arcu cursus ut sed vitae pul copy
        Nunc cursus libero purus ac congue arcu cursus ut sed vitae pul copy
      </p>
    </div>
  );
};

export default FeatureElement;
