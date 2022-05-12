import React from "react";

function Loader({ variant }) {
  if (variant === "small") {
    return <div className="lds-dual-ring small"></div>;
  } else {
    return <div className="lds-dual-ring regular"></div>;
  }
}

export default Loader;
