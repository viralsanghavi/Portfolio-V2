import Image from "next/image";
import Container from "../container";
import Heading from "../heading";

const Projects = () => {
  return (
    <section className="py-40 bg-bg" id="projects">
      <Container>
        <Heading
          title="PORTFOLIO"
          subTitle="Each project is a unique piece of development 🧩"
        />
        <div className="bg-white rounded-2xl p-5 shadow-md flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div
            style={{
              maxWidth: 530,
              height: 360,
            }}
            className="relative w-full rounded-2xl overflow-hidden gap-8 shadow-md"
          >
            <Image
              src="/viral.jpg"
              className="translate-y-0 hover:-translate-y-[50%] w-[530px]  h-[360px] transition-all ease-in-out transform duration-[8000ms]"
              fill
            />
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <h5 className="font-bold text-lg mb-8">
              CAR RENTAL <span className="text-sm">(FEB 2023)</span>
            </h5>
            <p className="text-base text-details font-medium text-center mb-4">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="">
              <div className="mb-4 shadow-md w-fit p-2">
                <p className="">React</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                className="text-lg font-medium text-[#2d2e32] flex items-center cursor-pointer"
                href="https://github.com/viralsanghavi"
                referrerPolicy="no-referrer"
                target="_blank"
              >
                Live Demo{" "}
                <Image width={24} height={24} src="/link.svg" alt="link" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
