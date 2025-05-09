import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion as m } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact,SiMysql } from "react-icons/si";
import {FaJava} from "react-icons/fa";
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
      <SmoothFollower/>
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
        <div className="projects mb-4">
          <h3 className='text-[#c5c3c3] relative font-semibold after:content-[""] after:absolute after:w-[8rem] after:h-[0.075rem] after:bg-green-500 after:bottom-2.5 after:ml-2.5 mt-10'>
            Projects
          </h3>
          <div className="flex gap-4 justify-between mr-3 mt-6 flex-wrap">
            <div className="project-card w-[200px] h-[200px] border  relative rounded-sm hover:scale-110 hover:ease-in-out hover:duration-[0.5s] ">
              <a href="https://freakcodes.github.io/simpliSearch/">
                <div className="">
                  <img
                    src="https://png.pngtree.com/element_our/png/20181227/movie-icon-which-is-designed-for-all-application-purpose-new-png_287896.jpg"
                    alt=""
                  />
                </div>
                <h3 className="  absolute bottom-0 font-semibold ml-10 ">
                  <a href="">Simpli Search</a>
                </h3>
              </a>
            </div>
            <div className="project-card w-[200px] h-[200px] border relative rounded-sm hover:scale-110 hover:ease-in-out hover:duration-[0.5s]  ">
              <a href="https://freakpomo.netlify.app/">
                <div className="">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/021/707/693/non_2x/pomodoro-technique-icon-vector.jpg"
                    alt=""
                  />
                </div>
                <h3 className="font-semibold absolute bottom-[-6px] ml-14  ">
                  Pomodoro
                </h3>
              </a>
            </div>

            <div className="project-card w-[200px] h-[200px] border relative rounded-sm hover:scale-110 hover:ease-in-out hover:duration-[0.5s] ">
              <a href="https://freakcodes.github.io/Dictionary/">
                <div className="">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/219/582/small_2x/illustration-of-book-icon-free-vector.jpg"
                    alt=""
                  />
                </div>
                <h3 className="  font-semibold  absolute bottom-0 ml-14 ">
                  Dictionary
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default About;
