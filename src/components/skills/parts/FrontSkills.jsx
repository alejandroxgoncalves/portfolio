import React from "react";
import { asset } from "../../../lib/asset"; 
const HTML       = asset("assets/svg/html.svg");
const CSS        = asset("assets/svg/css.svg");
const Javascript = asset("assets/svg/javascript.svg");
const Bootstrap  = asset("assets/svg/bootstrap.svg");
const Tailwind   = asset("assets/svg/tailwind.svg");
const Reactjs    = asset("assets/svg/react.svg");

const FrontSkills = () => {
  return (
    <>
      <div className="skill-card mt-2" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={HTML} alt="HTML" className="w-14 2xl:w-20" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h3 className="text-lg font-semibold 2xl:text-2xl">HTML</h3>
        </div>
      </div>

      <div className="skill-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={CSS} alt="CSS" className="w-14 2xl:w-20" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h3 className="text-lg font-semibold 2xl:text-2xl">CSS</h3>
        </div>
      </div>

      <div className="skill-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={Javascript} alt="JavaScript" className="w-10 2xl:w-16" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h3 className="text-lg font-semibold 2xl:text-2xl">JavaScript</h3>
        </div>
      </div>

      <div className="skill-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={Bootstrap} alt="Bootstrap" className="w-10 2xl:w-16" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h3 className="text-lg font-semibold 2xl:text-2xl">Bootstrap</h3>
        </div>
      </div>

      <div className="skill-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={Tailwind} alt="TailwindCSS" className="w-10 2xl:w-16" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h3 className="text-lg font-semibold 2xl:text-2xl">Tailwind</h3>
        </div>
      </div>

      <div className="skill-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={Reactjs} alt="React / React Native" className="w-8 sm:w-10 2xl:w-16" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h3 className="text-lg font-semibold 2xl:text-2xl">React.js/React Native</h3>
        </div>
      </div>
    </>
  );
};

export default FrontSkills;
