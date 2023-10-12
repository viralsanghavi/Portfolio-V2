import {useState} from "react";
import HeaderNavigation from "../header-navigation";
import Modal from "../modal";

const Header = () => {
  return (
    <nav className="px-14 py-7 pl-12 shadow-subtle fixed top-0 w-full flex justify-between items-center z-50 bg-white">
      <h3 className="font-bold text-2xl cursor-pointer">Viral.dev</h3>
      <HeaderNavigation />
    </nav>
  );
};

export default Header;
