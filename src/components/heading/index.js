import React from "react";

const Heading = ({title, subTitle, containerCN}) => {
  return (
    <div className={containerCN}>
      <h5 className="font-bold text-lg text-high mb-3">{title}</h5>
      <h3 className="font-bold text-2xl text-black leading-9 mb-6">
        {subTitle}
      </h3>
    </div>
  );
};

export default Heading;
