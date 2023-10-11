import Image from "next/image";
import React from "react";
import Container from "../container";
import GithubComponent from "@/assets/icons/github";
import LinkedInComponent from "@/assets/icons/linked-in";

const Footer = () => {
  return (
    <footer className="bg-[#2d2e32] py-12 ">
      <Container>
        <div className="flex justify-between flex-col md:flex-row items-center gap-5">
          <h3 className="text-white font-bold text-lg">
            Copyright © 2023. All rights are reserved
          </h3>
          <div className="flex items-center gap-6">
            <LinkedInComponent
              width={32}
              height={32}
              className="cursor-pointer text-white hover:scale-125 transition-all duration-500"
            />
            <GithubComponent
              width={32}
              height={32}
              className="cursor-pointer text-white hover:scale-125 transition-all duration-500"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
