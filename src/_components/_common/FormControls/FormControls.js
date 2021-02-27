import React from "react";

export const Input = ({ input, meta, ...props }) => {
  return <input {...input} {...props} className="search__input" />;
};
