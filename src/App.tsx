import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import List from './components/List/List'
import { ITask } from './types/type'

// const todoInputs: ITask = {
//   title: '',
//   status:false
// }

function App() {
// const [inputs, setInputs] = useState<ITask>(todoInputs);
// const [tasks, setTasks] = useState<ITask[]>([])

// const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }))
// }

// const submitHandler = async (e: React.FormEvent): Promise<void> => {
//   e.preventDefault()
//   try {
//     const response = await fetch('http://localhost:3000/api/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(inputs)
//     })
//     const result = await response.json();
//     setTasks((pre) => ([...pre, result]));
//     setInputs(() => todoInputs)
//   } catch (error) {
//     console.log(error)
//   }
// }

// const delHandler = async (id: number) => {
//   try {
//     const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
//       method: 'DELETE',
//   })
//     if(response.status === 200) {
//       setTasks((pre) => pre.filter((el) => el.id !== id))
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// const checkHandler = async (id: number) => {
//   const myTask : ITask | undefined = tasks.find((el) => el.id === id);
//   // console.log(myTask)
//   if (myTask) {    
//     try {
//       const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type':'application/json'
//         },
//         body:JSON.stringify({ status: !myTask.status })
//       })
//       const result = await response.json()
//       if(response.status === 200) {
//         setTasks((pre) => pre.map((el) => {
//           if (el.id === id ) {
//             el.status = result.status 
//             return el
//           } 
//           return el
//         }))
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }



// const updateHandler = async (id: number, str: string): Promise<void> => {   

//     try {
//       const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type':'application/json'
//         },
//         body:JSON.stringify({ title: str })
//       })
//       const result = await response.json()
//       if(response.status === 200) {
//         setTasks((pre) => pre.map((el) => {
//           if (el.id === id ) {
//             el.title = result.title
//             return el
//           } 
//           return el
//         }))
//       }
//     } catch (error) {
//       console.log(error)
//     }
// }

// useEffect(():void => {
//   ( async function (): Promise<void> {
//     try {
//       const response = await fetch('http://localhost:3000/api/todos');
//       const result = await response.json();
//       setTasks(() => ([...result]))
//     } catch (error) {
//       console.log(error)
//     }
//   })()
// }, [])
  return (
    <>
    {/* <Form submitHandler={ submitHandler } formHandler={ formHandler } inputs = { inputs }/>
    <List tasks={tasks} delHandler={ delHandler } checkHandler={ checkHandler }  updateHandler={updateHandler}/> */}
    <Form/>
    <List/>
    </>
  )
}

export default App
