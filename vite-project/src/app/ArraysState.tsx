"use client";

import { useState } from "react";
import { TodoItem } from "../types/TodoItem";

const Page = () => {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: "Fazer dever de casa", checked: true },
    { id: 2, label: "Comprar o bolo", checked: false },
  ]);

  const handleAddButton = () => {
    if (itemInput.trim() === "") return;

    setList([
      ...list,
      { id: list.length + 1, label: itemInput, checked: false },
    ]);
    setItemInput("");
  };

  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const toggleItem = (id: number) => {
    const newList = [...list];

    for (const i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }

    setList(newList);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="w-screen h-screen max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      <p className="my-4">{list.length} itens na lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item) => (
          <li key={item.id}>
            <input
              onClick={() => toggleItem(item.id)}
              type="checkbox"
              checked={item.checked}
              className="w-6 h-6 mr-3"
            />
            {item.label} -
            <button
              onClick={() => deleteItem(item.id)}
              className="hover:underline"
            >
              [ deletar ]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
