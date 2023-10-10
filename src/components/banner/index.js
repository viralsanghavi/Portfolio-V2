import Image from "next/image";
import React from "react";
import Container from "../container";

const Banner = () => {
  return (
    <section className="h-screen bg-bg" id="home">
      <Container>
        <div className="w-full h-full flex flex-col items-center justify-center gap-40">
          <div className="flex items-center gap-32 justify-center">
            <div className="max-w-lg w-full">
              <h1 className="font-bold text-6xl my-6 leading-sm">
                Full-Stack Developer 🚀
              </h1>
              <p className="text-xl font-normal leading-md">
                Hi, I&apos;m Viral Sanghavi. A passionate Full Stack Developer
                based in Mumbai, India. 📍
              </p>
              <div className="flex items-center gap-6 my-6">
                <Image
                  src="/linked-in.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                  className="cursor-pointer"
                />
                <Image
                  src="/github.svg"
                  width={32}
                  height={32}
                  alt="git"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div
              className="relative"
              style={{
                width: "350px",
                height: "350px",
              }}
            >
              <Image
                alt="profile photo"
                src="/viral.jpg"
                fill
                className="animate-morph rounded-morph border-black border-solid border-4 object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-start self-start gap-10">
            <span className="border-r border-solid border-blue-500 pr-10">
              Tech Stack
            </span>
            <div className="flex items-center gap-5 hover:-translate-y-2 transition-all duration-500">
              <Image src="/menu.svg" width={50} height={50} alt="react" />
              <Image src="/menu.svg" width={50} height={50} alt="html" />
              <Image src="/menu.svg" width={50} height={50} alt="css" />
              <Image src="/menu.svg" width={50} height={50} alt="javascript" />
              <Image src="/menu.svg" width={50} height={50} alt="AWS" />
              <Image src="/menu.svg" width={50} height={50} alt="Next" />
              <Image src="/menu.svg" width={50} height={50} alt="Vite" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
