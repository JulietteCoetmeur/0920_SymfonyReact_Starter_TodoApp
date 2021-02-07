import React from "react";

const Error = ({message}) => {
  return (
    <div className="text-white text-bold bg-dark p-2 one-edge-shadow"><span className="text-orange">➜</span> {message}</div>
  );
};

export default Error;