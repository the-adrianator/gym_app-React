import React from "react";

// import data
import { footer } from "../data";

const Footer = () => {
  // destructure footer data
  const { logo2, copyrightText } = footer;
  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[195px] px-[20px]">
      <div
        className="container mx-auto h-full flex justify-between items-center md:items-end mb-[50px] lg:pb-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* logo */}
        <a href="/">
          <img src={logo2} alt="" width={50} />
        </a>
        {/* copyright text */}
        <p className="text-neutral-300 text-sm">&copy; {copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
