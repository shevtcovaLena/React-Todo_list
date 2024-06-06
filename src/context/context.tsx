import React from 'react'
import { useEffect, useState, createContext } from 'react'
import { ITask, IList, IPropsForm, ITaskProps, IUpdateTitle } from '../types/type'

const todoInputs: ITask = {
    title: '',
    status:false
  }
  
interface IContext {
    inputs: ITask, 
    tasks: ITask[], 
    formHandler:React.ChangeEventHandler,
    submitHandler:React.FormEventHandler, 
    delHandler:(id: number) => void,
    checkHandler:(id: number) => void,
    updateHandler:(id: number, str : string) => void,
}

export const ContextAll: React.Context<IContext> = 
createContext({} as IContext)

export const ToDoContextProvider = ({children} : {
children: React.ReactNode}): JSX.Element => {
        const [inputs, setInputs] = useState<ITask>(todoInputs);
        const [tasks, setTasks] = useState<ITask[]>([]) 

        const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }))
        }

            const submitHandler = async (e: React.FormEvent): Promise<void> => {
                e.preventDefault()
                try {
                  const response = await fetch('http://localhost:3000/api/todos', {
                    method: 'POST',
                    headers: {
                      'Content-Type':'application/json'
                    },
                    body:JSON.stringify(inputs)
                  })
                  const result = await response.json();
                  setTasks((pre) => ([...pre, result]));
                  setInputs(() => todoInputs)
                } catch (error) {
                  console.log(error)
                }
              }
            
              const delHandler = async (id: number) => {
                try {
                  const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
                    method: 'DELETE',
                })
                  if(response.status === 200) {
                    setTasks((pre) => pre.filter((el) => el.id !== id))
                  }
                } catch (error) {
                  console.log(error)
                }
              }
              
              const checkHandler = async (id: number) => {
                const myTask : ITask | undefined = tasks.find((el) => el.id === id);
                // console.log(myTask)
                if (myTask) {    
                  try {
                    const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
                      method: 'PATCH',
                      headers: {
                        'Content-Type':'application/json'
                      },
                      body:JSON.stringify({ status: !myTask.status })
                    })
                    const result = await response.json()
                    if(response.status === 200) {
                      setTasks((pre) => pre.map((el) => {
                        if (el.id === id ) {
                          el.status = result.status 
                          return el
                        } 
                        return el
                      }))
                    }
                  } catch (error) {
                    console.log(error)
                  }
                }
              }
              
              const updateHandler = async (id: number, str: string): Promise<void> => {   

                try {
                  const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type':'application/json'
                    },
                    body:JSON.stringify({ title: str })
                  })
                  const result = await response.json()
                  if(response.status === 200) {
                    setTasks((pre) => pre.map((el) => {
                      if (el.id === id ) {
                        el.title = result.title
                        return el
                      } 
                      return el
                    }))
                  }
                } catch (error) {
                  console.log(error)
                }
            }

            useEffect(():void => {
                ( async function (): Promise<void> {
                  try {
                    const response = await fetch('http://localhost:3000/api/todos');
                    const result = await response.json();
                    setTasks(() => ([...result]))
                  } catch (error) {
                    console.log(error)
                  }
                })()
              }, [])

              const contextValue ={
                inputs, tasks, formHandler, submitHandler, delHandler, checkHandler, updateHandler
              }
              return(
                <ContextAll.Provider value={contextValue}>
                  {children}
                </ContextAll.Provider>
              )
        }
    
