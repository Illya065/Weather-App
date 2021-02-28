import React from "react";
import loader from "../../../img/Loader.gif";

const Loader = (props) => {
  return (
    <div className="loader">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
