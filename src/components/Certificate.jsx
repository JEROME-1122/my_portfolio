import { motion } from "framer-motion";
import { GoBriefcase } from "react-icons/go";

// import Guvi from "../../assets/certificate/guvi.png";
import Novitech from "../assets/certificate/noviTech_fullstack_development_.pdf";
import ImageCreative from "../assets/certificate/image_full_stack.pdf";
import CskSolutions from "../assets/certificate/CKS_Python.pdf";
import TrinityTechnology from "../assets/certificate/trinity.pdf";


const experiences = [
  {
    year: "08/04/2025 - Present",
    role: "Mern Stack Developer",
    company: "Guvi",
    description: `Trained in MERN Stack at GUVI Institute with hands-on experience in frontend, backend, and database development. Skilled in API creation, integration, Postman testing, and project deployment.`,
    //  imgs: `#`,
  },
  {
    year: "06/07/2024 - 05/08/2024",
    role: "Full Stack Developer",
    company: "Novitech R & D Private Limited",
    description:
      "Trained in Full-Stack Development & Creative Design at Creative Education. Skilled in HTML, CSS, JavaScript, Bootstrap, React, PHP, MySQL, WordPress, Photoshop, and Illustrator.",
     imgs: `${Novitech}`,

  },
  {
    year: "27/11/2021 - 11/01/2023",
    role: "Full Stack Developer",
    company: "Image Creative Education",
    description:
      "Trained in Full-Stack Development & Creative Design at Creative Education. Skilled in HTML, CSS, JavaScript, Bootstrap, React, PHP, MySQL, WordPress, Photoshop, and Illustrator.",
     imgs: `${ImageCreative}`,
  },

  {
    year: "08/08/2021 - 08/11/2021",
    role: "Python Developer",
    company: "CSK Solutions",
    description:
      "Trained in Python & MySQL at CKS, with hands-on experience in Python programming and database integration. Skilled in building database-driven applications and automating tasks.",
     imgs: `${CskSolutions}`,

  },

  {
    year: "05/12/2018 - 14/12/2018",
    role: "Software Traning",
    company: "Trinity Technology",
    description:
      "Completed In-Plant Training at Trinity Technology, with hands-on experience in HTML, Bootstrap, and PHP. Skilled in building responsive web pages and basic server-side functionality.",
     imgs: `${TrinityTechnology}`,

  },
];

export default function Certificate() {
  return (
    <section id="certificate" className="">
      <div className="container mx-auto  py-[50px] lg:px-0 px-[5%]">
        <h2 className="text-3xl font-bold mb-4 text-white text-center mb-10">
          Certificate
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
                <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded  hover:bg-indigo-600 transition">
                  <a
                    href={exp.imgs}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
