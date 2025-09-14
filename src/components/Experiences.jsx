
import { motion } from "framer-motion";
import { GoBriefcase } from "react-icons/go";

const experiences = [
  {
    year: "2023 - Present",
    role: "Web developer",
    company: "Doodlezz India Pvt Ltd",
    description: `Developed and maintained websites using HTML, CSS, JavaScript, and Bootstrap, with occasional use of PHP and MySQL, plus handling hosting and SEO optimization Worked on multiple projects simultaneously, ensuring timely delivery, improving website performance, and contributing to company growth with scalable, user-friendly applications.`,
  },
  {
    year: "2021 - Present",
    role: "Web Developer",
    company: "Freelancer",
    description:
      "Developed and maintained user-friendly websites using HTML, CSS, JavaScript, Bootstrap, Tailwind Css, React js  and occasionally PHP/MySQL, while delivering multiple projects on time..",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="">
      <div className="container mx-auto  py-[50px] lg:px-0 px-[5%]">
        <h2 className="text-3xl font-bold mb-4 text-white text-center mb-10">
          Experience
        </h2>
        <div className="relative border-l-4 border-indigo-400">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-5  flex items-center justify-center w-10 h-10 rounded-full bg-indigo-400 text-white">
                <GoBriefcase size={18} />
              </span>
              <div className="bg-white/5 border border-white/10 shadow-lg p-5 rounded-2xl">
                <h3 className="text-xl font-semibold text-white ">
                  {exp.role} -{" "}
                  <span className=" text-indigo-400">{exp.company}</span>
                </h3>
                <p className="text-sm 0 text-indigo-400">{exp.year}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
