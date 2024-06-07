import { useContext } from "react";
import { ContextAll } from "../../context/context";
import { ITask } from "../../types/type";
import { Button, Input, Form, FormInstance } from "antd";
import { SnippetsOutlined } from "@ant-design/icons";

interface IPropsForm {
  // inputs: Omit<ITask, "id" | "status">;
  formHandler: (input: Pick<ITask, "title">) => void;
  submitHandler: React.FormEventHandler;
  form: FormInstance<Pick<ITask, "title">>;
}

export default function FormTask() {
  const { formHandler, submitHandler, form }: IPropsForm =
    useContext(ContextAll);
  return (
    <Form
      // layout="inline"
      onValuesChange={formHandler}
      form={form}
      onFinish={submitHandler}
      style={{margin: "20px auto"}}
    >
      <Form.Item name="title">
        <Input
          // onChange={formHandler}
          // value={inputs.title}
          size="large"
          placeholder="Добавьте заметку"
          prefix={<SnippetsOutlined />}
          style={{backgroundColor: "white", height: "3rem"}}
        />
      </Form.Item>      
      <Button type="primary" onClick={submitHandler} htmlType="submit">
        Добавить
      </Button>
    </Form>
  );
}
