import Image from "next/image";
import Container from "../container";
import Heading from "../heading";
import {db} from "../../../firebase";
import {useEffect, useState} from "react";
import {collection, getDocs, addDoc} from "firebase/firestore/lite";

const Projects = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    (async () => {
      const data = await getProjects(db);
      setProjects(data);
    })();
  }, []);

  async function getProjects(db) {
    const projectsCol = collection(db, "projects");
    const projectsSnapshot = await getDocs(projectsCol);
    const projectsList = projectsSnapshot.docs.map((doc) => doc.data());
    return projectsList;
  }

  async function addProject() {
    const ref = collection(db, "projects");
    await addDoc(ref, {
      project_name: "Tokyo",
      photo_url: "",
      url: "",
      tech_stack: ["React"],
      description: "lorem",
    });
  }
  return (
    <section className="py-40 bg-bg" id="projects">
      {/* <button onClick={async (e) => await addProject()}>Hello</button> */}
      <Container>
        <Heading
          title="PORTFOLIO"
          subTitle="Each project is a unique piece of development 🧩"
        />
        {projects?.map(
          ({project_name, photo_url, url, description, tech_stack}) => (
            <div
              className="bg-white rounded-2xl p-5 shadow-md flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-4"
              key={project_name}
            >
              <div
                style={{
                  maxWidth: 530,
                  height: 360,
                }}
                className="relative w-full rounded-2xl overflow-hidden gap-8 shadow-md"
              >
                <Image
                  src={photo_url ?? "/viral.jpg"}
                  className="translate-y-0 hover:-translate-y-[50%] w-[530px]  h-[360px] transition-all ease-in-out transform duration-[8000ms]"
                  fill
                />
              </div>
              <div className="flex flex-col w-full items-center justify-center">
                <h5 className="font-bold text-lg mb-8">
                  {project_name} <span className="text-sm">(FEB 2023)</span>
                </h5>
                <p className="text-base text-details font-medium text-center mb-4">
                  {description}
                </p>
                {tech_stack.map((tech) => (
                  <div className="" key={tech}>
                    <div className="mb-4 shadow-md w-fit p-2">
                      <p className="">{tech}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-6">
                  <a
                    className="text-lg font-medium text-[#2d2e32] flex items-center cursor-pointer"
                    href={url}
                    referrerPolicy="no-referrer"
                    target="_blank"
                  >
                    Live Demo{" "}
                    <Image width={24} height={24} src="/link.svg" alt="link" />
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </Container>
    </section>
  );
};

export default Projects;
