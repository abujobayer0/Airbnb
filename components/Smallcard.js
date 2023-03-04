import React from "react";

const Smallcard = ({ data }) => {
  const { img, location, distance } = data;
  return <div>{location}</div>;
};

export default Smallcard;
