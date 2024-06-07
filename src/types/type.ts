import { Dispatch, SetStateAction } from "react"

interface ITask {
    id?: number,
    title: string,
    status: boolean
  }
  
  interface IList {
    tasks: ITask[],
    delHandler: (id: number) => void,
    checkHandler: (id: number) => void,
    updateHandler: (id: number, str:string) => void,
  }

      
  interface ITaskProps {
    delHandler: (id: number) => void,
    checkHandler: (id: number) => void,
    updateHandler: (id: number, str:string) => void,
  }

  interface IUpdateTitle {
    task: ITask,
    setComponent:Dispatch<SetStateAction<boolean>>
  }
  
  export type { ITask, IList, ITaskProps, IUpdateTitle }