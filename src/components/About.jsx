export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto  items-center text-white   py-[50px] lg:px-0 px-[5%]"
    >
      <div className="md:flex align-center justify-left gap-20">
        <div className="xl:w-[45%] md:-[50%] w-full ">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300 ">
            Software Engineer with 3 years of experience in developing scalable
            and user-friendly web applications and backend systems. Proficient
            in HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Node.js, and
            MongoDB, with strong expertise in writing clean, maintainable code
            and optimizing performance.
          </p>
        </div>
        <div className="">
          <ul className="space-y-3  text-gray-300 mb-6">
            <li>✔️ Strong in Frontend (React, TailwindCSS)</li>
            <li>✔️ Backend with Node.js & Express</li>
            <li>✔️ Database Management using MongoDB</li>
            <li>✔️ Freelance Projects & Client Work</li>
          </ul>

          <a
            href="#contact"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
