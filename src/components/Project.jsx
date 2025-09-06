import React, { useState } from "react";
import Frontend from "./project/Frontend";
import ReactProject from "./project/ReactProject";
import MeronStack from "./project/MeronStack";
import Exercise from "./project/Exercise";
import Emailer from "./project/Emailer";

function Project() {
  const [activetab, setActivetab] = useState("tab1");
  const tabs = [
    {
      id: "tab1",
      label: "frontend",
    },
    {
      id: "tab2",
      label: "React ",
    },
    {
      id: "tab3",
      label: "Mern Stack",
    },
    {
      id: "tab4",
      label: "Emailer ",
    },
    {
      id: "tab5",
      label: "Exercise ",
    },
  ];

  const tabContents = {
    tab1: (
      <div>
        <Frontend />
      </div>
    ),
    tab2: (
      <div>
        <ReactProject />
      </div>
    ),
    tab3: (
      <div>
        <MeronStack />
      </div>
    ),
    tab4: (
      <div>
        <Emailer />
      </div>
    ),
    tab5: (
      <div>
        <Exercise />
      </div>
    ),
  };
  return (
    <div className="bannersec  bg-gradient-to-r from-[#1F1E38] to-[#281C37] py-[50px]">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">My Projects</h2>
        <div className="flex flex-wrap">
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                className={`text-xl font-semibold text-white
                    ${activetab === tab.id ? "border-b-2 border-white" : ""}
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
    </div>
  );
}

export default Project;
