import React from "react";
import Container from "../container";
import Image from "next/image";
import Heading from "../heading";

const About = () => {
  return (
    <section className="py-40" id="about">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div
            className="relative w-full rounded-3xl overflow-hidden hover:shadow-lg transition-all ease-in-out duration-200"
            style={{
              height: 350,
              maxWidth: 410,
              minWidth: 410,
            }}
          >
            <Image
              src="/workspace.jpg"
              sizes="100vw"
              fill
              objectFit="cover"
              alt="cover"
            />
          </div>
          <div className="w-auto flex text-center lg:text-left flex-col">
            <Heading
              title="ABOUT ME"
              subTitle="A dedicated Full-Stack Developer based in Mumbai, India 📍"
            />
            <p className="font-normal text-base">
              I&apos;m a tech-savvy Full-Stack Developer skilled in React.js,
              DevOps, and team leadership. I handle everything from front-end to
              back-end, including infrastructure management. I&apos;m also
              proficient in React Native app development, taking projects from
              concept to reality. I specialize in crafting user-friendly
              websites and applications. My code is clean, optimized, and I stay
              updated with the latest industry tools and techniques.
              Collaboration is my strength; I thrive in cross-functional teams,
              leading projects from dynamic interfaces to end-to-end development
              and deployment.
              {/* I&apos;m a tech-savvy Full-Stack Developer with extensive knowledge of
              React.js technologies and DevOps practices. I don&apos;t just build
              websites; I handle everything from front-end to back-end
              development, and I&apos;m well-versed in managing infrastructure too.
              But that&apos;s not all. I also lead teams, and I&apos;m adept at creating
              React Native applications, which means I can take your project
              from concept to completion. I specialize in crafting user-friendly
              websites and web applications that work seamlessly across all
              devices. My code is clean and optimized, and I make it my business
              to stay ahead of the curve with the latest industry tools and
              techniques. Collaboration is my superpower. I thrive in
              cross-functional teams, and I&apos;m no stranger to leading them.
              Whether we&apos;re working on dynamic interfaces or handling the entire
              development and deployment process, you can count on me to deliver
              top-notch web solutions. */}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
