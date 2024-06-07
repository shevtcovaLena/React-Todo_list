import { useState, useContext } from "react";
import { IList } from "../../types/type";
import Task from "../Task/Task";
import { ContextAll } from "../../context/context";
import { Radio, List, Card, Flex } from "antd";
import Form from "../Form/Form";

type StatusType = "all" | false | true;

export default function ListCard(): JSX.Element {
  const { tasks }: IList = useContext(ContextAll);
  const [status, setStatus] = useState<StatusType>("all");

  const data = tasks.filter((task) => task.status != status).reverse();

  return (
    <Card
      title={<Form />}
      actions={[<Radio.Group
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ marginTop: "16px" }}
      >
        <Radio.Button value="all">Все записи</Radio.Button>
        <Radio.Button value={true}>Активные</Radio.Button>
        <Radio.Button value={false}>Завершенные</Radio.Button>
      </Radio.Group>]}
      className="tasks"    
    >
      <Flex vertical justify="space-between" style={{
        minHeight: "650px",        
      }}>
        <List
          size="small"
          pagination={{
            align: "center",
            position: "top",
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 7,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
              {<Task key={item.id} task={item} />}
            </List.Item>
          )}
        />        
      </Flex>
    </Card>
  );
}
