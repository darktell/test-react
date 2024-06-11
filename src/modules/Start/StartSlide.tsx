import { ReactComponent as AndroidIcon } from "src/assets/icons/android.svg";
import { ReactComponent as AppleIcon } from "src/assets/icons/apple.svg";
import Button, { VARIANT } from "src/components/Button";
import Constraint from "src/components/Constraint";

const PLATFORM_ICONS_STYLE =
  "w-[50px] h-[50px] rounded-full flex items-center justify-center bg-black/40 hover:svg-hover";

const StartSlide = () => {
  return (
    <div
      className="pt-16 pb-10 md:h-[600px] xl:h-[800px] w-full bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url(/img/main-slide-bg.png)" }}
    >
      <img
        alt="phone"
        role="presentation"
        className="absolute hidden xl:block bottom-0 -left-6 w-[35vw]"
        src="img/hand-phone.png"
      />
      <Constraint className="flex items-center justify-center xl:justify-end xl:items-end h-full">
        <div className="xl:w-7/12 xl:h-[58%] text-white">
          <p className="text-[48px]">
            <span>
              Simple, Beautiful <strong>and Amazing</strong>
            </span>
          </p>

          <p className="pt-7 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc e Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc e Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc e
          </p>

          <div className="flex flex-col sm:flex-row mt-10 gap-10">
            <Button variant={VARIANT.SECONDARY}>DOWNLOAD</Button>
            <Button variant={VARIANT.PRIMARY}>LEARN MORE</Button>
          </div>

          <div className="flex mt-[50px] items-center gap-5">
            <p className="text-xl">Available on:</p>
            <Button className={PLATFORM_ICONS_STYLE}>
              <AppleIcon />
            </Button>
            <Button className={PLATFORM_ICONS_STYLE}>
              <AndroidIcon />
            </Button>
          </div>
        </div>
      </Constraint>
    </div>
  );
};

export default StartSlide;
