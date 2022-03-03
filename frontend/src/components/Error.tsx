import React from "react";
import { IError } from "../types/Error";

const Error = ({ error }: IError) => {
  return (
    <div className="h-screen bg-gray-800 text-white flex flex-row justify-center items-center">
      <h3>{error.message} 🥺</h3>
    </div>
  );
};

export default Error;
