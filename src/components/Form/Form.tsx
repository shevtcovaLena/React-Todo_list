import { ChangeEventHandler, useContext } from "react";
import { ContextAll } from "../../context/context";
// import { ITaskInput } from "../../types/type";
import { Button, Input, Form, FormInstance } from "antd";
import { SnippetsOutlined } from "@ant-design/icons";

interface IPropsForm {
  formHandler: ChangeEventHandler<HTMLInputElement>;
  submitHandler: React.FormEventHandler;
  form: FormInstance<any>;
}

export default function FormTask() {
  const { form, formHandler, submitHandler }: IPropsForm =
    useContext(ContextAll);
  return (
    <Form
      form={form}
      data-testid="task-form"
      onFinish={submitHandler}
      style={{ margin: "20px auto" }}
    >
      <Form.Item name="title">
        <Input
          onChange={formHandler}
          size="large"
          placeholder="Добавьте заметку"
          prefix={<SnippetsOutlined />}
          style={{ backgroundColor: "white", height: "3rem" }}
        />
      </Form.Item>
      <Button type="primary">Добавить</Button>
    </Form>
  );
}
