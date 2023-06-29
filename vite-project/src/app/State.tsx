"use client";
import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState<number>(0);

  const handleBtnClick = () => {
    setCount(count + 2);
    setCount((c) => c + 2);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center itens-center text-3xl">
      <div>
        <p>{count}</p>
        <button
          onClick={handleBtnClick}
          className="bg-blue-500 p-3 text-white rounded-md"
        >
          +2
        </button>
      </div>
    </div>
  );
};

export default Page;
