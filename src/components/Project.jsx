import { useState } from "react";

import Details from "./project/component/Details";
import { frontend } from "./datas/frontend";
import { mern } from "./datas/mern";
import { react } from "./datas/react";
import { exercise } from "./datas/exercise";

function Project() {
  const [activetab, setActivetab] = useState("tab1");
  const tabs = [
    {
      id: "tab1",
      label: "Mern Stack",
    },
    {
      id: "tab2",
      label: "Frontend",
    },
    {
      id: "tab3",
      label: "React",
    },
    // {
    //   id: "tab4",
    //   label: "Exercise ",
    // },
    // {
    //   id: "tab5",

    //   label: "Emailer ",
    // },
  ];

  const tabContents = {
 
    tab1: <Details data={mern} />,
       tab2: <Details data={frontend} />,
    tab3: <Details data={react} />,
    tab4: <Details data={exercise} />,
    tab5: <div>{/* <Emailer /> */}</div>,
  };
  return (
    <section className="bannersec  py-[50px] lg:px-0 px-[5%]" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">
          My Projects
        </h2>
        <div className="flex flex-wrap align-center justify-center ">
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                className={`text-xl font-semibold text-white px-4 py-2 m-2 rounded-lg hover:bg-white/10 transition 
                    ${
                      activetab === tab.id
                        ? "border-2 border-white/8 bg-white/5"
                        : ""
                    }
                    `}
                onClick={() => {
                  setActivetab(tab.id);
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="">{tabContents[activetab]}</div>
      </div>
    </section>
  );
}

export default Project;
