import React from "react";
import { asset } from "../../../lib/asset"; 

// íconos 
const PHP         = asset("assets/svg/php.svg");
const Node        = asset("assets/svg/node.svg");
const CSharp      = asset("assets/svg/csharp.svg");
const MySQL       = asset("assets/svg/mysql.svg");
const PostgreSQL  = asset("assets/svg/postgresql.svg");
const MongoDB     = asset("assets/svg/mongodb.svg");

const BackSkills = () => {
  return (
    <>
      <div className="skill-card mt-2" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={PHP} alt="PHP" className="w-12 2xl:w-20" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h1 className="text-lg font-semibold 2xl:text-2xl">PHP</h1>
        </div>
      </div>

      <div className="skill-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={Node} alt="Node.js" className="w-10 2xl:w-16" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h1 className="text-lg font-semibold 2xl:text-2xl">Node.js</h1>
        </div>
      </div>

      <div className="skill-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={CSharp} alt="C# / ASP.NET Core MVC" className="w-10 2xl:w-16" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h1 className="text-lg font-semibold 2xl:text-2xl">C#/ASP.NET Core MVC</h1>
        </div>
      </div>

      <div className="skill-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={MySQL} alt="MySQL" className="w-16 2xl:w-28" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h1 className="text-lg font-semibold 2xl:text-2xl">MySQL</h1>
        </div>
      </div>

      <div className="skill-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={PostgreSQL} alt="PostgreSQL" className="w-10 2xl:w-16" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h1 className="text-lg font-semibold 2xl:text-2xl">PostgreSQL</h1>
        </div>
      </div>

      <div className="skill-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
        <img src={MongoDB} alt="MongoDB" className="w-20 2xl:w-32" loading="lazy" decoding="async" />
        <div className="text-center font-montserrat">
          <h1 className="text-lg font-semibold 2xl:text-2xl">MongoDB</h1>
        </div>
      </div>
    </>
  );
};

export default BackSkills;
