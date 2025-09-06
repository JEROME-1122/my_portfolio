import { useTypewriter, Cursor } from "react-simple-typewriter";
import bannerImg from "../assets/bannerright_img.webp";
import "./css/banner.css";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "FrontEnd",
      "FullStack Developer",
      "Mern Stack Developer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <div className="bannersec  bg-gradient-to-r from-[#1F1E38] to-[#281C37] py-[50px]">
      <div className="bannerinnersec container mx-auto">
        <div className="flex">
          <div className="w-1/2 colsec1">
            <h1 className="typwirtetext mb-5">
              Hi, i am Jerome Franklin X <br />
              I'm a &nbsp;
              <span className="words">{text}</span>
              <span style={{ color: "yellow" }}>
                <Cursor />
              </span>
            </h1>
            <div className="rowsec mb-5 ">
              <button className="btn contbtn px-3 py-2 rounded  hover:bg-[#306EE8] hover:text-base-600">
                Contact Me
              </button>
              <button className="btn contbtn px-3 py-2 rounded  hover:bg-[#306EE8] hover:text-base-600">
                Download CV
              </button>
            </div>

            <p className="description">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>
          </div>
          <div className="w-1/2 colsec">
            <div className="imgsec">
              <img src={bannerImg} className="bannerrightimg" alt="" title="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
