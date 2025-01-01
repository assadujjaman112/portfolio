import Navbar from "../../Components/Navbar";
import myImage from "../../assets/images/myImage.png";
import { FaArrowDown, FaNode, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import Projects from "../../Components/Projects";
import Education from "../../Components/Education";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div className="bg-zinc-900">
      <div className=" shadow-slate-700 py-4 px-5 shadow-md  w-full">
        <Navbar></Navbar>
      </div>
      <div className="w-4/5 mx-auto flex flex-col-reverse md:flex-row justify-evenly items-center py-12">
        <div
          className="text-white flex-1 mt-10"
          data-aos="zoom-in-right"
          data-aos-duration="3000"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hi, I am <span className="text-blue-600">Assadujjaman</span>
          </h1>
          <p className="mt-3">
            I am a highly skilled and motivated front-end developer with a
            passion for creating innovative and user-friendly websites and web
            applications.I am strongly skilled in javascript.I am also skilled
            in React. I love to do things with React.I always try to explore
            more about the technologies that i like.
          </p>
          <button className=" bg-blue-600 btn mt-5 text-white border-none">
            <a
              href="https://drive.google.com/file/d/15DkLWpM4V_ppUBp0kk9PV6dQg-kagI4x/view?usp=sharing"
              download
              className="flex gap-3 items-center"
            >
              <FaArrowDown></FaArrowDown> Download Resume
            </a>
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img data-aos="zoom-in-left" data-aos-duration="3000" src={myImage} />
        </div>
      </div>
      <section className="mt-5 md:mt-8 lg:mt-12">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center my-5">
          Skills
        </h1>
        <div className="flex gap-5 justify-center py-5 md:py-8">
          <FaHtml5 className="text-orange-700 text-5xl"></FaHtml5>
          <SiTailwindcss className="text-5xl text-cyan-500"></SiTailwindcss>
          <DiCss3 className="text-5xl text-blue-700"></DiCss3>
          <IoLogoJavascript className="text-5xl text-black bg-yellow-500 rounded-lg px-1"></IoLogoJavascript>
          <FaReact className="text-cyan-500 text-5xl"></FaReact>
          <FaNode className="text-green-600 text-6xl"></FaNode>
          <SiExpress className="text-white text-5xl"></SiExpress>
        </div>
      </section>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
