import React from 'react'
import { useState, useContext } from "react";
import { ITask, IUpdateTitle } from '../../types/type';
import { ContextAll } from '../../context/context';

export default function Update({task, setComponent}: IUpdateTitle): JSX.Element {
const {updateHandler} = useContext(ContextAll)
    const [input, setInput] = useState<ITask>(task);

    const formUpdateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    }
  return (
    <div>
        <input type="text"  name='title' placeholder='введите текст' value={input.title} onChange={formUpdateHandler}/>
        <button onClick={()=> updateHandler(task.id, input.title) && setComponent(<></>)}>изменить</button>
    </div>
  )
}
