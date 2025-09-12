import React from "react";
import Details from "./component/Details";
import { exercise } from "../datas/exercise";

function Exercise() {
  return (
    <div>
      <Details data={exercise} />
    </div>
  );
}

export default Exercise;
