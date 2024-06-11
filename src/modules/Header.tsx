import cn from "classnames";
import { useState } from "react";
import BurgerButton from "src/components/BurderButton";
import Constraint from "src/components/Constraint";

const NAV_LINKS = [
  { href: "#home-block", label: "HOME" },
  { href: "#feature-block", label: "FEATURES" },
  { href: "#gallery-block", label: "GALLERY" },
  { href: "#video-block", label: "VIDEO" },
  { href: "/", label: "PRICES" },
  { href: "/", label: "TESTIMONIALS" },
  { href: "/", label: "DOWNLOAD" },
  { href: "#contact-block", label: "CONTACT" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-[200] top-0 w-full">
      <div className="flex md:hidden bg-black/50 justify-between items-center p-2">
        <BurgerButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <img
          alt="logo"
          className="w-[70px] h-[30px] sm:w-auto"
          src="img/logo.png"
        />
        <nav
          className={cn(
            "w-[100vw] h-screen bg-black/50 top-[64px] left-0 -translate-x-full absolute transition duration-300 ease-in-out",
            {
              "translate-x-0": isMenuOpen,
            },
          )}
        >
          {NAV_LINKS.map(({ href, label }, index) => (
            <a
              key={label + index}
              href={href}
              className="block text-white text-xl font-medium hover:text-primary px-4 py-1"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="hidden md:block bg-black/50">
        <Constraint className="md:flex justify-between items-center">
          <img alt="logo" src="img/logo.png" />
          <nav className="space-x-8 flex">
            {NAV_LINKS.map(({ href, label }, index) => (
              <a
                key={label + index}
                href={href}
                className="border-t-2 block border-transparent text-white text-[13px] font-medium hover:border-primary hover:text-primary py-8"
              >
                {label}
              </a>
            ))}
          </nav>
        </Constraint>
      </div>
    </header>
  );
};

export default Header;
