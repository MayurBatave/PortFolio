import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[10vw] lg:px-[16vw] font-sans 
                 bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 top-0 w-1 bg-white h-full -translate-x-1/2"></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={edu.id} className="relative mb-20 flex">
              {/* Timeline Circle */}
              <div className="absolute left-1/2 sm:left-1/2 -translate-x-1/2 
                              w-16 h-16 rounded-full bg-gray-300 border-4 border-purple-500 
                              z-20 flex justify-center items-center overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Box */}
              <div
                className={`
                  mt-10 sm:mt-0 w-full sm:w-[45%] 
                  p-6 sm:p-8 
                  rounded-xl shadow-2xl border border-white
                  bg-gray-900 backdrop-blur-md
                  shadow-[0_0_20px_2px_rgba(130,69,236,0.3)]
                  transform transition duration-300 hover:scale-105
                  ${
                    isLeft
                      ? "sm:mr-auto sm:pr-10 sm:text-right"
                      : "sm:ml-auto sm:pl-10 sm:text-left"
                  }
                `}
              >
                {/* Inside Content */}
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* School Image */}
                  <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-3 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
