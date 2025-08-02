import React from "react";
import aboutImg from "../assets/aboutme.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div whileInView={{opacity:1, x:0 }} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-3/4 lg:w-2/3"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{opacity:1, x:0 }}
          initial={{opacity:0, x:100}}
          transition={{duration:0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <div className="lg:w-1/2">
              <div className="edu">
                <div className="box-arrow mb-4"></div>
                <p className="font-poppins font-normal text-2xl">
                  Educational Qualification
                </p>
                <br /> <br />
              </div>
              <div className="edu-qua">
                <i className="bi bi-mortarboard text-3xl"></i>
                <p className="font-poppins font-light italic text-lg">
                  MVPS’s KBTCOE, Nashik - B.E. - IT
                </p>
                <p className="text-sm text-gray-600">
                  2021-2025
                </p>
                <br />
                <i className="bi bi-building text-3xl"></i>
                <p className="font-poppins font-light italic text-lg">
                  Upadhye College of Science, Nashik - 11th & 12th
                </p>
                <p className="text-sm text-gray-600">11th & 12th Science</p>
                <br />
                <i className="bi bi-pen-fill text-3xl"></i>
                <p className="font-poppins font-light italic text-lg">
                  New Era English School, Nashik
                </p>
                <p className="text-sm text-gray-600">
                  Primary and secondary education
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
