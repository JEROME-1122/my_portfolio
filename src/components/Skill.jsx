
import { skills } from "./datas/skill";

function Skill() {
  return (
    <section id="skills" className="lg:px-0 px-[5%]">
      <h2 className="text-3xl font-bold text-center text-white pt-10 ">
        My Skills
      </h2>
      <p className="text-center text-white mb-2 mt-2">
        These are the technologies I've worked with
      </p>
      <div className="container mx-auto py-12 ">
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className=" group bg-white/5 border border-white/10 rounded-xl p-6 md:w-[150px] w-[45%] flex flex-col items-center shadow-lg backdrop-blur-sm hover:cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
         
              <div className="h-[70px] w-[70px] flex items-center justify-center mb-3">
                <img
                  src={skill.img}
                  alt={skill.names}
                  className="max-h-[70px] group-hover:scale-110 transition-transform duration-300"
                />
              </div>

    
              <p className="text-sm font-semibold text-indigo-400 group-hover:text-indigo-300">
                {skill.names}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
