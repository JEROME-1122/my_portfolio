import React from "react";
import { skills } from "./datas/skill";

function Skill() {
  return (
    <div className=" bg-gradient-to-r from-[#1F1E38] to-[#281C37]">
      <h2 className="text-3xl font-bold text-center text-white pt-10">
        My Skills
      </h2>
      <p className="text-center text-white mb-2 mt-2">
        These are the technologies I've worked with
      </p>
      <div className="flex flex-wrap gap-4 align-center justify-center container mx-auto py-[50px]">
        {skills.map((skill) => (
          <div
            className="skillbox border rounded-xl border-[#306EE8] border-2 p-4 m-2 text-center w-[150px] shadow-xl hover:scale-105 transition-transform duration-300 "
            key={skill.id}
          >
            <img
              src={skill.img}
              alt={skill.names}
              className="mx-auto h-[80px]"
            />
            <p className="text-[#306EE8] font-bold mt-3">{skill.names}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
