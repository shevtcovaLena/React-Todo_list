import React from "react";
import { useState, useContext } from "react";
import { ITask, IUpdateTitle } from "../../types/type";
import { ContextAll } from "../../context/context";

export default function Update({
  task,
  setComponent,
}: IUpdateTitle): JSX.Element {
  const { updateHandler } = useContext(ContextAll);
  const [input, setInput] = useState<ITask>(task);

  const formUpdateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((pre) => ({ ...pre, title: e.target.value }));
    console.log(input);
  };


  const updateButtonHandler = (e: React.FormEvent) => {
    e.preventDefault();
    updateHandler(task.id as number, input.title);
    setComponent(false);
  };

  return (
    <div style={{display: "inline-block"}} onBlur={() => setComponent(false)}>
      <form onSubmit={updateButtonHandler}>
        <input
          className="update-input"
          type="text"
          name="title"
          value={input.title}
          onChange={formUpdateHandler}
        />        
      </form>
    </div>
  );
}
