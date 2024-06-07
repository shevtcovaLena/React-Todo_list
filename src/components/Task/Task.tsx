import { useState, useContext } from "react";
import { ITask, ITaskProps } from "../../types/type";
import Update from "../Update/Update";
import { ContextAll } from "../../context/context";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function Task({ task }: { task: ITask }): JSX.Element {
  const { delHandler, checkHandler }: ITaskProps = useContext(ContextAll);
  const [component, setComponent] = useState<boolean>(false);
  return (
    <div className="myTask">
      <div className="inline">
        <input
          type="checkbox"
          onChange={() => checkHandler(task.id as number)}
          checked={task.status}
        />
        {task.status ? (
          <p className="task-text" style={{ textDecoration: "line-through", color: "grey" }}>
            {task.title}
          </p>
        ) : (
          <p className="task-text">{task.title}</p>
        )}
      </div>
      <div>
      {component ? <Update task={task} setComponent={setComponent} /> : <></>}
        <Button type="link" onClick={() => setComponent((pre) => (!pre))}>
          <EditOutlined style={{ fontSize: "18px" }} />
        </Button>
        <Button type="link" onClick={() => delHandler(task.id as number)}>
          <DeleteOutlined style={{ fontSize: "18px" }} />
        </Button>
      </div>
    </div>
  );
}
