import Header from "@/components/Header/Header";
import React from "react";
import SideBar from "../SideBar/SideBar";
import Mode from "../Mode/Mode";

const NavBar = () => {
  return (
    <div className="border-b border-b-muted/10  ">
      <div className="flex gap-4 container mx-auto px-12 py-4 justify-between items-center ">
        <div>
          {/* Big Screen */}
          <div className="hidden md:flex  ">
            <Header />
          </div>
          {/* Mobile */}
          <div className="md:hidden block">
            <SideBar />
          </div>
        </div>

        {/* Mode */}
        <div>
          <Mode />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
