import React, { useLayoutEffect } from "react";
import { useEffect, useState, createContext } from "react";
import { ITask } from "../types/type";
import { Form, FormInstance } from "antd";

const todoInputs: Pick<ITask, "title"> = {
  title: "",
};

const initTasks: ITask[] = [
  { title: "Знать JS", status: true, id: 1 },
  { title: "Знать HTML, CSS", status: true, id: 2 },
  { title: "Знать React", status: true, id: 3 },
  { title: "Стать программистом", status: true, id: 4 },
  { title: "Выполнить тестовое", status: true, id: 5 },
  { title: "Найти команду мечты", status: false, id: 6 },  
];

export interface IContext {
  inputs: Pick<ITask, "title">;
  tasks: ITask[];
  formHandler: (input: Pick<ITask, "title">) => void;
  submitHandler: React.FormEventHandler;
  delHandler: (id: number) => void;
  checkHandler: (id: number) => void;
  updateHandler: (id: number, str: string) => void;
  form: FormInstance<Pick<ITask, "title">>;
}

export const ContextAll: React.Context<IContext> = createContext(
  {} as IContext
);

export const ToDoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [inputs, setInputs] = useState<Pick<ITask, "title">>(todoInputs);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [form] = Form.useForm<Pick<ITask, "title">>();

  const formHandler = (input: Pick<ITask, "title">) => {
    setInputs(input);
  };

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    const newTask: ITask = { ...inputs, id: Number(new Date()), status: false };
    setTasks((pre) => [...pre, newTask]);
    form.resetFields();
  };

  const delHandler = async (id: number) => {
    setTasks((pre) => pre.filter((el) => el.id !== id));
  };

  const checkHandler = (id: number): void => {
    const myTask: ITask | undefined = tasks.find((el) => el.id === id);
    if (myTask) {
      setTasks((pre) =>
        pre.map((el) => {
          if (el.id === id) {
            el.status = !el.status;
            return el;
          }
          return el;
        })
      );
    }
  };

  const updateHandler = (id: number, str: string): void => {
    setTasks((pre) =>
      pre.map((el) => {
        if (el.id === id) {
          console.log(el);
          el.title = str;
          console.log(el);
          return el;
        }
        return el;
      })
    );
  };

  useEffect((): void => {
    sessionStorage.tasks = JSON.stringify(tasks);
  }, [tasks]);

  useLayoutEffect((): void => {
    if (sessionStorage.tasks) {
    setTasks((pre) => [...pre, ...JSON.parse(sessionStorage.tasks)]);
    return
    }
    setTasks(initTasks)
  }, []);

  const contextValue: IContext = {
    inputs,
    tasks,
    formHandler,
    submitHandler,
    delHandler,
    checkHandler,
    updateHandler,
    form,
  };
  return (
    <ContextAll.Provider value={contextValue}>{children}</ContextAll.Provider>
  );
};

// const submitHandler = async (e: React.FormEvent): Promise<void> => {
//   e.preventDefault();
//   try {
//     const response = await fetch("<url api>", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(inputs),
//     });
//     const result = await response.json();
//     setTasks((pre) => [...pre, result]);
//     setInputs(() => todoInputs);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const delHandler = async (id: number) => {
//   try {
//     const response = await fetch(`<url api>`, {
//       method: "DELETE",
//     });
//     if (response.status === 200) {
//       setTasks((pre) => pre.filter((el) => el.id !== id));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const checkHandler = async (id: number) => {
//   const myTask: ITask | undefined = tasks.find((el) => el.id === id);
//   if (myTask) {
//     try {
//       const response = await fetch(`<url api>`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status: !myTask.status }),
//       });
//       const result = await response.json();
//       if (response.status === 200) {
//         setTasks((pre) =>
//           pre.map((el) => {
//             if (el.id === id) {
//               el.status = result.status;
//               return el;
//             }
//             return el;
//           })
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };

// const updateHandler = async (id: number, str: string): Promise<void> => {
//   try {
//     const response = await fetch(`<url api>`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title: str }),
//     });
//     const result = await response.json();
//     if (response.status === 200) {
//       setTasks((pre) =>
//         pre.map((el) => {
//           if (el.id === id) {
//             el.title = result.title;
//             return el;
//           }
//           return el;
//         })
//       );
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect((): void => {
//   (async function (): Promise<void> {
//     try {
//       const response = await fetch("<url api>");
//       const result = await response.json();
//       setTasks(() => [...result]);
//     } catch (error) {
//       console.log(error);
//     }
//   })();
// }, []);
