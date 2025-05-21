import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion as m } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SkillItem from "../components/SkillItem";
import SmoothFollower from "../components/SmoothFollower";
import { Image } from "@imagekit/react";
const About = () => {
  return (
    <m.div
      // initial={{ y: "100%" }}
      // animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className=" w-full "
    >
      <SmoothFollower />
      <div className="w-[80%] border mx-auto mt-4 pl-6     ">
        <h3 className='text-[#c5c3c3] relative font-semibold after:content-[""] after:absolute after:w-[8rem] after:h-[0.075rem] after:bg-green-500 after:bottom-2.5 after:ml-2.5'>
          ABOUT
        </h3>
        <h1 className="text-white text-4xl font-extrabold font-sans uppercase ">
          Learn More about me
        </h1>
        <div className="heroSection md:flex md:flex-nowrap gap-4 sm:flex sm:flex-wrap  ">
          <div className="image w-[150px] h-[150px] object-contain lg:w-[400px] lg:h-[400px] ml-[30px] rounded-md  mt-3  ">
            <Image
              urlEndpoint="https://ik.imagekit.io/abhay123"
              src="/portfolio"
              alt="My Picture"
              className="h-full rounded-lg"
              loading="eager"
            />
          </div>
          <div className="des w-[70%]">
            <h1 className="text-3xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 drop-shadow-sm">
              Full-Stack Developer
            </h1>

            <div className="main-about">
              <p className="text-neutral-300 mt-4 w-[90%] leading-relaxed tracking-wide text-[1.05rem] md:text-lg font-light">
                <span className="block text-white font-semibold text-xl mb-2">
                  Hey there,
                </span>
                I'm a{" "}
                <span className="text-white font-medium">
                  Computer Science Engineering student
                </span>{" "}
                passionate about
                <span className="text-teal-400 font-medium">
                  {" "}
                  full-stack web development
                </span>
                , specializing in the
                <span className="text-green-400 font-medium">
                  {" "}
                  MERN stack
                </span>{" "}
                (MongoDB, Express.js, React, Node.js). I enjoy crafting
                <span className="text-blue-400 font-medium">
                  {" "}
                  responsive UIs
                </span>{" "}
                and building
                <span className="text-purple-400 font-medium">
                  {" "}
                  scalable backends
                </span>{" "}
                that bring ideas to life. With a strong foundation in{" "}
                <span className="text-orange-400 font-medium">Java</span>, I
                approach problems with an object-oriented mindset and a focus on
                clean, efficient code.
                <br className="my-2" />
                I'm always exploring new technologies and building hands-on
                projects — aiming to
                <span className="text-pink-400 font-medium">
                  {" "}
                  solve real-world problems, one line of code at a time.
                </span>
              </p>
              <div className="bio-data mt-6 space-y-4 text-sm md:text-base text-neutral-300">
                <div className="flex flex-wrap md:flex-nowrap justify-between">
                  <div className="w-full md:w-1/2">
                    <span className="text-green-400 mr-2">&gt;</span>
                    <span className="font-semibold text-white">
                      Birthday:
                    </span>{" "}
                    4<sup>th</sup> October 2004
                  </div>
                  <div className="w-full md:w-1/2">
                    <span className="text-green-400 mr-2">&gt;</span>
                    <span className="font-semibold text-white">Age:</span> 20
                  </div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-between">
                  <div className="w-full md:w-1/2">
                    <span className="text-green-400 mr-2">&gt;</span>
                    <span className="font-semibold text-white">
                      Degree:
                    </span>{" "}
                    B.TECH
                  </div>
                  <div className="w-full md:w-1/2">
                    <span className="text-green-400 mr-2">&gt;</span>
                    <span className="font-semibold text-white">
                      Email:
                    </span>{" "}
                    gabhay408@gmail.com
                  </div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-between">
                  <div className="w-full md:w-1/2">
                    <span className="text-green-400 mr-2">&gt;</span>
                    <span className="font-semibold text-white">City:</span>{" "}
                    Siliguri, West Bengal, India
                  </div>
                </div>
              </div>

              <p className="text-white font-sans  mt-4"></p>
            </div>
          </div>
        </div>
        <div className="skills">
          <h3 className='text-[#c5c3c3] relative font-semibold after:content-[""] after:absolute after:w-[8rem] after:h-[0.075rem] after:bg-green-500 after:bottom-2.5 after:ml-2.5 mt-10'>
            Skills
          </h3>

          {/* Skill Row 1 */}
          <div className="flex my-4 flex-wrap gap-6">
            <SkillItem Icon={SiHtml5} name="HTML" percent={90} />
            <SkillItem Icon={SiCss3} name="CSS" percent={70} />
          </div>

          {/* Skill Row 2 */}
          <div className="flex my-4 flex-wrap gap-6">
            <SkillItem Icon={SiJavascript} name="JavaScript" percent={70} />
            <SkillItem Icon={SiReact} name="React" percent={60} />
          </div>

          {/* Skill Row 3 */}
          <div className="flex my-4 flex-wrap gap-6">
            <SkillItem Icon={FaJava} name="Java" percent={70} />
            <SkillItem Icon={SiMysql} name="MySQL" percent={50} />
          </div>
        </div>
        <div className="projects mb-10 px-2">
          <h3 className='text-[#c5c3c3] relative font-semibold text-2xl after:content-[""] after:absolute after:w-[8rem] after:h-[2px] after:bg-green-500 after:bottom-0 after:left-0 mb-6'>
            Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Medley-logs */}
            <div className="relative group overflow-hidden rounded-md shadow-lg border border-gray-700">
              <img
                src="https://ik.imagekit.io/abhay123/Screenshot%202025-05-21%20120552.png?updatedAt=1747811759780"
                alt="Medley-logs"
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://github.com/Freakcodes/Medley-logs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-lg"
                >
                  Medley-logs
                </a>
              </div>
            </div>

            {/* VidSnap */}
            <div className="relative group overflow-hidden rounded-md shadow-lg border border-gray-700">
              <img
                src="https://ik.imagekit.io/abhay123/Screenshot%202025-05-21%20121726.png?updatedAt=1747811759783"
                alt="VidSnap"
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://github.com/Freakcodes/VidSnap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-lg"
                >
                  VidSnap
                </a>
              </div>
            </div>

            {/* Dictionary */}
            <div className="relative group overflow-hidden rounded-md shadow-lg border border-gray-700">
              <img
                src="https://ik.imagekit.io/abhay123/Screenshot%202025-05-21%20121745.png?updatedAt=1747811759838"
                alt="Dictionary"
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://freakcodes.github.io/Dictionary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-lg"
                >
                  Dictionary
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default About;
