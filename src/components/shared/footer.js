import React from "react";

const Footer = () => {
  return (
    <footer
      className={`bg-light p-3 text-center mt-n5 position-sticky bottom-0`}
    >
      {new Date().getFullYear()} &copy; Kátodo Store
    </footer>
  );
};

export default Footer;
