import React,{ useState, useContext }  from 'react'
import { IList, ITask } from '../../types/type';
import Task from '../Task/Task';
import { ContextAll } from '../../context/context';



export default function List():JSX.Element {
  const {tasks}:IList = useContext(ContextAll)

  return (
    <div className="tasks">
    {tasks.length ? 
    tasks.map((task: ITask) => 
    
    <Task key={task.id} task={task}/>) :
    (<h2>No tasks</h2>)}  
    </div>
  )
}
