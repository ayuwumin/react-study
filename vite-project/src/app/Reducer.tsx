"use client";

import { useReducer, useState } from "react";
import { Item } from "../types/Item";
import { listReducer } from "../reducers/listReducer";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  const handleAddClick = () => {
    dispatch({
      type: "add",
      payload: {
        text: "New Item",
      },
    });
  };

  dispatch({
    type: "toggleDone",
    payload: { id: 2 },
  });

  dispatch({
    type: "editText",
    payload: { id: 2, newText: "New Text" },
  });

  dispatch({
    type: "remove",
    payload: { id: 2 },
  });

  return (
    <div className="">
      <button onClick={handleAddClick}>Adicionar</button>
    </div>
  );
};

export default Page;
