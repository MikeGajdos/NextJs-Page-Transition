import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <Link href="/" passHref>
          <a>Next.js and Gsap</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
