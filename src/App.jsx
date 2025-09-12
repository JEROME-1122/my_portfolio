import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#1F1E38] to-[#281C37] ">
      <Navbar />
      <Banner />
      <About />
      <Skill />
      <Project />
      <ContactForm />
    </div>
  );
}

export default App;
