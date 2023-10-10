import React from "react";

const Container = ({children}) => {
  return (
    <div className="max-w-screen-lg w-full mx-auto p-5 h-full">{children}</div>
  );
};

export default Container;
