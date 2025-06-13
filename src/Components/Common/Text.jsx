import React from "react";

const Text = ({ as, variant, message }) => {
  const TEXT_TYPE = {
    h1: <h1 className={variant}>{message}</h1>,
    h2: <h2 className={variant}>{message}</h2>,
    p: <p className={variant}>{message}</p>,
  };

  return (
    <>
      {TEXT_TYPE[as]}
    </>
  )
};

export default Text;