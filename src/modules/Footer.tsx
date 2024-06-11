import Constraint from "src/components/Constraint";

const Footer = () => {
  return (
    <div className="bg-darkGray w-full py-[50px]">
      <Constraint className="text-sm flex flex-col sm:flex-row items-center text-center gap-2 sm:gap-0 sm:justify-between text-lightGray">
        <p>Copyright © 2013 | bazinger | All Rights Reserved</p>
        <p>Terms of Service | Privacy Policy</p>
      </Constraint>
    </div>
  );
};

export default Footer;
