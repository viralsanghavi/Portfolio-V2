import Image from "next/image";
import React from "react";
import Container from "../container";
import LinkedInComponent from "@/assets/icons/linked-in";
import GithubComponent from "@/assets/icons/github";

const Banner = () => {
  return (
    <section className="lg:h-screen h-auto bg-bg py-24" id="home">
      <Container>
        <div className="w-full h-full flex flex-col items-center justify-center lg:gap-20 gap-5 ">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-32 justify-center">
            <div className="max-w-lg w-full">
              <h1 className="font-bold text-4xl lg:text-6xl my-6 text-center lg:text-left leading-sm">
                Modern Full-Stack Developer 🚀
              </h1>
              <p className="text-xl font-normal leading-md text-center lg:text-left">
                Hi, I&apos;m Viral Sanghavi. A passionate Full Stack Developer
                based in Mumbai, India. 📍
              </p>
              <div className="flex items-center gap-6 my-6 justify-center lg:justify-start">
                <a
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href="https://www.linkedin.com/in/vsanghavi3/"
                >
                  <LinkedInComponent
                    width={32}
                    height={32}
                    className="cursor-pointer text-black hover:scale-125 transition-all duration-500"
                  />
                </a>
                <a
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href="https://github.com/viralsanghavi"
                >
                  <GithubComponent
                    width={32}
                    height={32}
                    className="cursor-pointer text-black hover:scale-125 transition-all duration-500"
                  />
                </a>
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
          <div className="flex flex-col lg:flex-row items-center justify-start self-center lg:self-start gap-10">
            <span className="lg:border-r lg:border-b-0 border-b border-solid border-blue-500 lg:pr-10 pb-3 lg:pb-0">
              Tech Stack
            </span>
            <div className="flex items-center flex-wrap justify-center gap-5">
              <Image
                src="/html.png"
                width={50}
                height={50}
                alt="react"
                className=" hover:-translate-y-2 transition-all duration-500"
              />
              <Image
                src="/js.png"
                width={50}
                height={50}
                alt="css"
                className=" hover:-translate-y-2 transition-all duration-500"
              />
              <Image
                src="/typescript.png"
                width={50}
                height={50}
                alt="javascript"
                className=" hover:-translate-y-2 transition-all duration-500"
              />
              <Image
                src="/frm.svg"
                width={100}
                height={50}
                alt="AWS"
                className=" hover:-translate-y-2 transition-all duration-500"
              />
              <Image
                src="/css.svg"
                width={100}
                height={50}
                alt="Next"
                className=" hover:-translate-y-2 transition-all duration-500"
              />
              <Image
                src="/css-3.png"
                width={50}
                height={50}
                alt="html"
                className=" hover:-translate-y-2 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
