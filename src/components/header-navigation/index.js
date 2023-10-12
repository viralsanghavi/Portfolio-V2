import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import Modal from "../modal";

const HeaderNavigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navList = ["home", "about", "projects", "contact"];
  return (
    <div>
      <div className="lg:flex gap-8 capitalize cursor-pointer text-lg font-semibold hidden">
        {navList.map((nav) => (
          <Link href={`/#${nav}`} key={nav} className="hover:text-high">
            {nav}
          </Link>
        ))}
      </div>
      <div className="flex lg:hidden">
        <Image
          onClick={() => setShowSidebar(true)}
          src="/menu.svg"
          className="cursor-pointer"
          width={30}
          height={30}
          alt="menu"
        />
      </div>
      <Modal open={showSidebar} onClose={setShowSidebar} navList={navList} />
    </div>
  );
};

export default HeaderNavigation;
