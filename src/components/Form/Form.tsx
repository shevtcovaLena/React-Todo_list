import { ChangeEventHandler, useContext } from "react";
import { ContextAll } from "../../context/context";
import { ITaskInput } from "../../types/type";
import { Button, Input, Form } from "antd";
import { SnippetsOutlined } from "@ant-design/icons";

interface IPropsForm {
  inputs: ITaskInput;
  formHandler: ChangeEventHandler<HTMLInputElement>;
  submitHandler: React.FormEventHandler;
}

export default function FormTask() {
  const { inputs, formHandler, submitHandler }: IPropsForm =
    useContext(ContextAll);
  return (
    <Form
      onFinish={submitHandler}
      style={{margin: "20px auto"}}
    >
      <Form.Item name="title" >
        <Input
          onChange={formHandler}
          value={inputs?.title || ""}
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
