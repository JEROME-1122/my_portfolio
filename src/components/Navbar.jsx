import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full  text-white shadow-lg z-50 lg:px-0 px-[0%] bg-gradient-to-r from-[#1F1E38] to-[#281C37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">MyPortfolio</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {[
              // "banner",
              "about",
              "skills",
              "projects",
              // "experience",
              "contact",
            ].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={200}
                offset={-70}
                className="cursor-pointer hover:text-indigo-400 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-[#281C37] px-4 py-3 space-y-2">
          {[
            // "banner",
            "about",
            "skills",
            "projects",
            // "experience",
            "contact",
          ].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={700}
              offset={-70}
              className="block cursor-pointer hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
