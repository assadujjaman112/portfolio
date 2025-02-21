import { BiCalendar, BiSolidSchool } from "react-icons/bi";

const Education = () => {
  return (
    <div id="education" className="text-white my-5 md:my-8 lg:my-12 w-4/5 mx-auto">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center my-5 ">
        Educational <span className="text-blue-400">Qualifications</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="mt-5">
          <h1 className="font-bold text-xl mb-2">
            Secondary School Certificate
          </h1>
          <p className="flex gap-3 items-center">
            <span className="font-bold text-lg flex items-center gap-3">
              <BiSolidSchool></BiSolidSchool> School :
            </span>
            Sonargaon G.R. Institution
          </p>
          <p className="flex gap-3 items-center">
            <span className="font-bold text-lg flex items-center gap-3">
              <BiCalendar></BiCalendar> Year :
            </span>
            2016
          </p>
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-xl mb-2">
            Higher Secondary Certificate
          </h1>
          <p className="flex gap-3 items-center">
            <span className="font-bold text-lg flex items-center gap-3">
              <BiSolidSchool></BiSolidSchool> College :
            </span>
            Tejgaon College
          </p>
          <p className="flex gap-3 items-center">
            <span className="font-bold text-lg flex items-center gap-3">
              <BiCalendar></BiCalendar> Year :
            </span>
            2018
          </p>
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-xl mb-2">
            BSc. In Geography & Environment
          </h1>
          <p className="flex gap-3 items-center">
            <span className="font-bold text-lg flex items-center gap-3">
              <BiSolidSchool></BiSolidSchool> Institution :
            </span>
            Dhaka College
          </p>
          <p className="flex gap-3 items-center">
            <span className="font-bold text-lg flex items-center gap-3">
              <BiCalendar></BiCalendar> Year :
            </span>
            2019 - Present
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
