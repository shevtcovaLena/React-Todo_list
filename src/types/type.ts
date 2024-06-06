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

  interface IPropsForm {
    inputs: ITask,
    formHandler: React.ChangeEventHandler,
    submitHandler: React.FormEventHandler
  }
  
  
  interface ITaskProps {
    // task: ITask,
    delHandler: (id: number) => void,
    checkHandler: (id: number) => void,
    updateHandler: (id: number, str:string) => void,
  }

  interface IUpdateTitle {
    task: ITask,
    updateHandler: (id: number, str:string) => void,
  }
  
  export type { ITask, IPropsForm, IList, ITaskProps, IUpdateTitle }