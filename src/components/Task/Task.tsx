import React from 'react'
import { useState, useContext } from "react";
import { IList, ITask, ITaskProps } from '../../types/type'
import box from '../../assets/box.png'
import Update from '../Update/Update'
import { ContextAll } from '../../context/context';

export default function Task({task}):JSX.Element {


    const {delHandler, checkHandler}:ITaskProps = useContext(ContextAll)
  const [component, setComponent] = useState(<></>)
  return (
    <div className='myTask' align="justify">
    <input type="checkbox" onChange={() => checkHandler(task.id)} checked={task.status}/>
    {task.status? <span style={{textDecoration: "line-through"}}>{task.title}</span> : <span>{task.title}</span> }
    <button onClick={() => setComponent(<Update task={task}  setComponent={setComponent}/>)}>редактировать</button>
   <button onClick={() => delHandler(task.id)}><img src={box} alt="box" width='10px' /></button>
   {component}

<hr/>
    </div>
  )
}
