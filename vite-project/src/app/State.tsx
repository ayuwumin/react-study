"use client";
import { useState } from "react";
import { Person } from "../types/Person";

const Page = () => {
  const [fullName, setFullName] = useState<Person>({
    name: "First Name",
    lastName: "Last Name",
  });

  const handleClearButton = () => {
    setFullName({ name: "", lastName: "" });
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center itens-center text-3xl">
      <div>
        <input
          type="text"
          placeholder="Nome"
          className="border border-black p-3 text-2x1 text-black rounded-md mb-3"
          value={fullName.name}
          onChange={(e) => setFullName({ ...fullName, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          className="border border-black p-3 text-2x1 text-black rounded-md mb-3"
          value={fullName.lastName}
          onChange={(e) =>
            setFullName({ ...fullName, lastName: e.target.value })
          }
        />

        <p>Meu nome completo é:</p>
        <p>
          {fullName.name} {fullName.lastName}
          <button onClick={handleClearButton}>Clear</button>
        </p>
      </div>
    </div>
  );
};

export default Page;
