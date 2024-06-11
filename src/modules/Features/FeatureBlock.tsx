import { ReactComponent as CustomizeIcon } from "src/assets/icons/customize.svg";
import { ReactComponent as DesignIcon } from "src/assets/icons/design.svg";
import { ReactComponent as LayoutIcon } from "src/assets/icons/layout.svg";
import { ReactComponent as MultipurposeIcon } from "src/assets/icons/multipurpose.svg";
import Constraint from "src/components/Constraint";
import FeatureElement from "src/modules/Features/FeatureElement";

const LIST_TO_MAP = [
  {
    icon: LayoutIcon,
    label: "Attractive Layout",
  },
  {
    icon: DesignIcon,
    label: "Fresh Design",
  },
  {
    icon: MultipurposeIcon,
    label: "multipurpose",
  },
  {
    icon: CustomizeIcon,
    label: "Easy to customize",
  },
];

const FeatureBlock = () => {
  return (
    <div
      className="bg-[#f9f9f9] pt-[60px] pb-[90px] shadow-md"
      id="feature-block"
    >
      <Constraint className="flex flex-col items-center">
        <p className="text-[36px] font-semibold text-center">
          summarise the features
        </p>

        <p className="text-xl text-center">
          summarise what your product is all about{" "}
        </p>

        <div className="flex mt-[70px] w-full flex-wrap md:flex-nowrap justify-center md:justify-between">
          {LIST_TO_MAP.map(({ icon, label }) => (
            <FeatureElement key={label} icon={icon} label={label} />
          ))}
        </div>
      </Constraint>
    </div>
  );
};

export default FeatureBlock;
