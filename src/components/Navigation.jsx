import { useState } from "react";
import Menu from "./Menu";

function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);

  function handleMobileMenuShow() {
    setMobileMenu((curr) => !curr);
  }

  return (
    <nav className="flex flex-col  px-6 2xl:flex-row 2xl:px-[165px] grow 2xl:content-center 2xl:mb-[78px]">
      <div className="flex flex-row justify-between   h-10 items-center py-10 2xl:flex-none 2xl:mr-11 2xl:py-0">
        <div id="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <div
          id="mobile-menu"
          className="2xl:hidden"
          onClick={handleMobileMenuShow}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-[28px] w-[32px] fill-app-grayish-violet"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>
      <Menu mobileMenu={mobileMenu} />
    </nav>
  );
}

export default Navigation;
