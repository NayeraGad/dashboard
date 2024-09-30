import { Link, NavLink } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

import { links } from "../data/dummy.jsx";
import { useStateContext } from "../contexts/ContextProvider.jsx";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink =
    "flex items-center gap-5 m-2 pt-3 pl-4 pb-2.5 rounded-lg text-white text-md";
  const normalLink =
    "flex items-center m-2 gap-5 pt-3 pl-4 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md";

  return (
    <div className="h-screen ml-3 pb-10 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => setActiveMenu(false)}
              className="flex items-center gap-3
            mt-4 ml-3 text-slate-900 dark:text-white text-xl font-extrabold tracking-tight"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>

            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                onClick={() => setActiveMenu((prev) => !prev)}
                className="block md:hidden mt-3 p-3 rounded-full hover:bg-light-gray text-xl"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>

                {item.links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.name}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon} <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
