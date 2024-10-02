import React, { useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../assets/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import Cart from "./Cart";
import Chat from "./Chat";
import Notifications from "./Notifications";
import UserProfile from "./UserProfile";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative p-3 rounded-full hover:bg-light-gray text-xl"
    >
      <span
        className=" absolute top-2 right-2 inline-flex w-2 h-2 rounded-full"
        style={{ background: dotColor }}
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize]);
  

  return (
    <div className="relative flex justify-between items-center md:mx-6 p-2">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        icon={<AiOutlineMenu />}
        color="blue"
      />

      <div className="flex ms-auto">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          icon={<FiShoppingCart />}
          color="blue"
        />

        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          icon={<BsChatLeft />}
          color="blue"
        />

        <NavButton
          title="Notification"
          customFunc={() => handleClick("notifications")}
          icon={<RiNotification3Line />}
          color="blue"
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="cursor-pointer flex items-center gap-2 p-1 rounded-lg hover:bg-light-gray">
            <div className=" rounded-full overflow-hidden w-8 h-8">
              <img src={avatar} alt="user profile picture" />
            </div>

            <div
              className="flex items-center gap-2"
              onClick={() => handleClick("userProfile")}
            >
              <p className=" text-gray-400 text-14">
                Hi,<span className="ml-1 font-bold">Michael</span>
              </p>
              <MdKeyboardArrowDown className=" text-gray-400 text-14" />
            </div>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notifications && <Notifications />}
        {isClicked.userProfile && <UserProfile />}
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
