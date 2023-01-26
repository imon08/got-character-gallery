import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="h-20 w-20 border-2 border-white animate-spin"></div>
      <p className="text-white mt-5 text-2xl">Loading...</p>
    </div>
  );
};

export default Spinner;
