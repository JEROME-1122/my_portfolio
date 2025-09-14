import { useTypewriter, Cursor } from "react-simple-typewriter";

import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";
import "./css/banner.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Banner = () => {
  // const [text] = useTypewriter({
  //   words: [
  //     "Web Developer",
  //     "FrontEnd",
  //     "FullStack Developer",
  //     "Mern Stack Developer",
  //   ],
  //   loop: {},
  //   typeSpeed: 100,
  //   deleteSpeed: 100,
  // });
  return (
    <>
      {/* <div className="bannersec  ">
        <div className="bannerinnersec container mx-auto">
          <div className="flex">
            <div className="w-1/2 colsec1">
              <h1 className="typwirtetext mb-5">
                Hi, i am Jerome Franklin X <br />
                I'm a &nbsp;
                <span className="words">{text}</span>
                <span style={{ color: "yellow" }}>
                  <Cursor />
                </span>
              </h1>
              <div className="rowsec mb-5 ">
                <button className="btn contbtn px-3 py-2 rounded  hover:bg-[#306EE8] hover:text-base-600">
                  Contact Me
                </button>
                <button className="btn contbtn px-3 py-2 rounded  hover:bg-[#306EE8] hover:text-base-600">
                  Download CV
                </button>
              </div>

              <p className="description">
                I am a motivated and versatile individual, always eager to take
                on new challenges. With a passion for learning I am dedicated to
                delivering high-quality results. With a positive attitude and a
                growth mindset, I am ready to make a meaningful contribution and
                achieve great things.
              </p>
            </div>
            <div className="w-1/2 colsec">
              <div className="imgsec">
                <img
                  src={bannerImg}
                  className="bannerrightimg"
                  alt=""
                  title=""
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className="lg:px-0 px-[5%] py-[50%]  flex items-center justify-center text-white pt-30 px-6 container mx-auto flex flex-col md:flex-row items-center gap-10 py-[50px]">
        {/* LEFT: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-indigo-400">Jerome Franklin X</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            A passionate{" "}
            <span className="font-semibold text-indigo-300">
              Mern Stack Developer{" "}
            </span>
            building modern, responsive websites & applications with React,
            Node.js, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition font-medium"
            >
              Hire Me
            </a>
            <a
              href={resume}
              download="Jerome-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-indigo-500 hover:bg-indigo-500 transition font-medium"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex gap-5 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/jerome-franklin-x-5049a21ab/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-indigo-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/JEROME-1122/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-indigo-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-indigo-400">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
