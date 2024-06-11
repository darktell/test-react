import React from "react";

const GoogleMapComponent = ({ className }: { className?: string }) => {
  return (
    <iframe
      src="https://maps.google.com/maps?q=Zhytomyr,%20Ukraine&t=&z=15&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="100%"
      className={className}
      aria-hidden="false"
    />
  );
};

export default GoogleMapComponent;
