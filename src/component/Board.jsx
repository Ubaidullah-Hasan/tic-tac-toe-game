import { useState } from "react";

function Square() {
    const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }

  return (
    <button
      className="text-lg border border-gray-600 w-12 h-12 m-1 "
      onClick={handleClick}
    >
        {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
