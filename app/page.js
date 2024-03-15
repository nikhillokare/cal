"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-300">
      <div className="w-80 bg-white rounded-lg shadow-lg p-6">
        <input
          type="text"
          className="w-full mb-4 p-2 text-right bg-gray-100 rounded-md text-2xl text-gray-800 font-bold"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          <button
            name="("
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            (
          </button>
          <button
            name=")"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            )
          </button>
          <button
            name="%"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            %
          </button>
          <button
            name="AC"
            onClick={clear}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            AC
          </button>
          <button
            name="7"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            7
          </button>
          <button
            name="8"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            8
          </button>
          <button
            name="9"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            9
          </button>
          <button
            name="/"
            onClick={handleClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            /
          </button>
          <button
            name="4"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            4
          </button>
          <button
            name="5"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            5
          </button>
          <button
            name="6"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            6
          </button>
          <button
            name="*"
            onClick={handleClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            *
          </button>
          <button
            name="1"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            1
          </button>
          <button
            name="2"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            2
          </button>
          <button
            name="3"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            3
          </button>
          <button
            name="-"
            onClick={handleClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            -
          </button>
          <button
            name="."
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            .
          </button>
          <button
            name="0"
            onClick={handleClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            0
          </button>
          <button
            onClick={backspace}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            &larr;
          </button>
          <button
            name="+"
            onClick={handleClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            +
          </button>
          <button
            onClick={calculate}
            className="col-span-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
