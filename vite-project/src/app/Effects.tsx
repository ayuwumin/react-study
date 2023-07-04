"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const [firstName, setFirstName] = useState("Kyoko");
  const [lastName, setLastName] = useState("Hori");

  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="">
      <p>my name is {fullName}</p>
      <hr />
      <button
        className="border border-blue-400 m-3 p-3"
        onClick={() => setFirstName("Izumi")}
      >
        change to Izumi
      </button>
      <button
        className="border border-blue-400 m-3 p-3"
        onClick={() => setLastName("Miyamura")}
      >
        change to Miyamura
      </button>
    </div>
  );
};

export default Page;
