// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

import { Footer, Navbar, Sidebar, Themes } from "./components";
import {
  Ecommerce,
  Customers,
  Employees,
  Orders,
  Calender,
  ColorPicker,
  Editor,
  Kanban,
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked
} from "./pages";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-[1000]">
            <TooltipComponent content="Settings" position="Top">
              <button
                className="p-3 text-white text-3xl rounded-full hover:bg-light-gray hover:drop-shadow-xl"
                style={{ backgroundColor: "blue" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className=" w-72 fixed bg-white sidebar dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`bg-main-bg w-full min-h-screen dark:bg-main-bg 
              ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div className="navbar fixed w-full md:static bg-main-bg dark:bg-main-dark-bg">
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/colorPicker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/colorMapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>

            {/* <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
