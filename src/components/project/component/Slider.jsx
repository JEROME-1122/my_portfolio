import { motion } from "framer-motion";
import { GoBriefcase } from "react-icons/go";

function Slider() {
  return (
    <div>
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
            {exp.role} - <span className=" text-indigo-400">{exp.company}</span>
          </h3>
          <p className="text-sm 0 text-indigo-400">{exp.year}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {exp.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Slider;
