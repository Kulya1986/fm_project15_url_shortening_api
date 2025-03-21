const menu = [
  {
    menuItem: "Feature",
    itemLink: "#",
  },
  {
    menuItem: "Pricing",
    itemLink: "#",
  },
  {
    menuItem: "Resources",
    itemLink: "#",
  },
];

function Menu({ mobileMenu }) {
  return (
    <div
      className={`${
        mobileMenu ? "flex animate-slow-drop" : "animate-slow-up"
      } flex-col py-2.5 px-6 absolute w-(--mobile-menu-width) text-white font-bold text-lg top-[80px] rounded-[10px]  bg-app-very-dark-violet 2xl:w-auto 2xl:flex-row 2xl:bg-inherit 2xl:text-app-grayish-violet 2xl:text-[15px] 2xl:justify-between 2xl:py-0 2xl:px-0  2xl:static 2xl:top-0 2xl:grow 2xl:items-center 2xl:animate-none 2xl:flex`}
    >
      <ul
        className={` ${
          mobileMenu ? "animate-show-menu-items" : "animate-hide-menu-items"
        } text-center border-b-[1px] border-app-grayish-violet flex flex-col gap-[30px] py-[30px] 2xl:flex-row 2xl:gap-8 2xl:py-0 2xl:border-none 2xl:animate-none`}
      >
        {menu.map((item) => {
          return (
            <li
              className="hover:cursor-pointer 2xl:hover:text-app-very-dark-blue"
              key={item.menuItem}
            >
              <a href={item.itemLink}>{item.menuItem}</a>
            </li>
          );
        })}
      </ul>
      <div
        className={`${
          mobileMenu ? "animate-show-login-items" : "animate-hide-login-items"
        } text-center  flex flex-col gap-[30px] py-[30px] 2xl:flex-row 2xl:gap-9 2xl:py-0 2xl:animate-none`}
      >
        <button className="hover:cursor-pointer 2xl:hover:text-app-very-dark-blue">
          Login
        </button>

        <button className="grow h-[48px] mx-[65px] bg-app-cyan text-white content-center rounded-[28px] text-lg font-bold tracking-normal capitalize 2xl:h-10 2xl:px-6 2xl:text-[15px] 2xl:mx-0 hover:cursor-pointer hover:bg-app-cyan-hover">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Menu;
