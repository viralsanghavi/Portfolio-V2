import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderNavigation = () => {
  const navList = ["home", "about", "projects", "contact"];
  return (
    <div>
      <div className="lg:flex gap-8 capitalize cursor-pointer text-lg font-semibold hidden">
        {navList.map((nav) => (
          <Link href={`/#${nav}`} key={nav}>
            {nav}
          </Link>
        ))}
      </div>
      <div className="flex lg:hidden">
        <Image
          src="/menu.svg"
          className="cursor-pointer"
          width={30}
          height={30}
          alt="menu"
        />
      </div>
    </div>
  );
};

export default HeaderNavigation;
