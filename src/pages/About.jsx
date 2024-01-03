import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion as m } from "framer-motion";
const About = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className=" w-full "
    >
      <div className="w-[80%] border mx-auto mt-4 pl-6     ">
        <h3 className='text-[#c5c3c3] relative font-semibold after:content-[""] after:absolute after:w-[8rem] after:h-[0.075rem] after:bg-green-500 after:bottom-2.5 after:ml-2.5'>
          ABOUT
        </h3>
        <h1 className="text-white text-4xl font-extrabold font-sans uppercase ">
          Learn More about me
        </h1>
        <div className="heroSection md:flex md:flex-nowrap gap-4 sm:flex sm:flex-wrap  ">
          <div className="image w-[150px] h-[150px] object-contain lg:w-[400px] lg:h-[400px] ml-[30px] rounded-md  mt-3  ">
            <img
              src="https://drive.google.com/uc?id=1SIevKEBC076kKEb8cdeq9kYbdQRtFVr8"
              alt="photo"
              className="h-full"
            />
          </div>
          <div className="des w-[70%]">
            <h1 className="text-2xl font-semibold text-green-500">
              Web Developer
            </h1>
            <div>
              <p className="text-white italic">
                Hi there! I'm Abhay Gupta an aspiring full stack developer
                currently in third-semester pursuing B.Tech in Computer Science
                and Engineering from SIliguri Institute of Technology.
              </p>
            
              <div className="mt-5 flex flex-wrap md:flex-nowrap justify-between  ">
                <div className="text-white list-none  ">
                  {" "}
                  <span className="text-green-500 ">&gt;</span>
                  <span className="font-semibold"> Birthday:</span> 4
                  <sup>th</sup> October 2004
                </div>
                <div className="text-white list-none  w-[50%]   ">
                  {" "}
                  <span className="text-green-500  ">&gt;</span>
                  <span className="font-semibold"> Age:</span>19
                </div>
              </div>
              <div className="mt-5 flex justify-between flex-wrap md:flex-nowrap ">
                <div className="text-white list-none ">
                  {" "}
                  <span className="text-green-500 ">&gt;</span>
                  <span className="font-semibold">Degree:</span>B.TECH
                </div>
                <div className="text-white list-none  w-[50%] ">
                  {" "}
                  <span className="text-green-500 ">&gt;</span>
                  <span className="font-semibold">Phone:</span>9083157505
                </div>
              </div>
              <div className="mt-5 flex justify-between flex-wrap md:flex-nowrap">
                <div className="text-white list-none   ">
                  {" "}
                  <span className="text-green-500">&gt;</span>
                  <span className="font-semibold">Email:</span>
                  gabhay408@gmail.com
                </div>
                <div className="text-white list-none w-[50%] ">
                  {" "}
                  <span className="text-green-500">&gt;</span>
                  <span className="font-semibold">City:</span>
                  Siliguri,WestBengal,India
                </div>
              </div>
              <p className="text-white font-sans  mt-4">
                I really enjoy playing around with web development stuff. Right
                now, I'm pretty good at making the front-end part of websites
                look cool.Lately, I've been learning how to work on the backend
                of websites too. I love keeping up with what's new in tech and
                trying out different things.
              </p>
            </div>
          </div>
        </div>
        <div className="skills">
          <h3 className='text-[#c5c3c3] relative font-semibold after:content-[""] after:absolute after:w-[8rem] after:h-[0.075rem] after:bg-green-500 after:bottom-2.5 after:ml-2.5 mt-10'>
            Skills
          </h3>
          <div className="skills   flex my-4 ">
            <div className="w-full ">
              <div className="skill-label flex justify-between w-full text-[0.93rem] text-white font-semibold ">
                <div className="   ">HTML</div>
                <div className=" mr-14">90%</div>
              </div>

              <ProgressBar
                completed={90}
                borderRadius="1px"
                height="10px"
                width="90%"
                labelSize="12px"
                bgColor="#50C878"
                animateOnRender={true}
                transitionTimingFunction="ease-in"
                transitionDuration="1s"
                customLabel=" "
              />
            </div>
            <div className="w-full ">
              <div className="skill-label flex justify-between w-full text-[0.93rem] text-white font-semibold ">
                <div className="    ">CSS</div>
                <div className=" mr-14 text-end">70%</div>
              </div>

              <ProgressBar
                completed={70}
                borderRadius="1px"
                height="10px"
                width="90%"
                labelSize="12px"
                bgColor="#50C878"
                animateOnRender={true}
                transitionTimingFunction="ease-in"
                transitionDuration="1s"
                customLabel=" "
              />
            </div>
          </div>
          <div className="skills   flex my-4 ">
            <div className="w-full ">
              <div className="skill-label flex justify-between w-full text-[0.93rem] text-white font-semibold ">
                <div className="    ">JavaScript</div>
                <div className="  mr-14 text-end">70%</div>
              </div>

              <ProgressBar
                completed={70}
                borderRadius="1px"
                height="10px"
                width="90%"
                labelSize="12px"
                bgColor="#50C878"
                animateOnRender={true}
                transitionTimingFunction="ease-in"
                transitionDuration="1s"
                customLabel=" "
              />
            </div>
            <div className="w-full   ">
              <div className="skill-label flex justify-between w-full text-[0.93rem] text-white font-semibold ">
                <div className="   ">React</div>
                <div className=" mr-14 text-end">60%</div>
              </div>

              <ProgressBar
                completed={60}
                borderRadius="1px"
                height="10px"
                width="90%"
                labelSize="12px"
                bgColor="#50C878"
                animateOnRender={true}
                transitionTimingFunction="ease-in"
                transitionDuration="1s"
                customLabel=" "
              />
            </div>
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
