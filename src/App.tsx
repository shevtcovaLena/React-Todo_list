import { ConfigProvider } from "antd";
import "./App.css";
import List from "./components/List/ListCard";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: "#b5b7c7",
            colorBgContainer: "#e4e6f7",
            borderRadius: 0,
            fontSize: 18,
          },
          components: {
            Button: {
              algorithm: true,
            },
          },
        }}
      >
        <List />
      </ConfigProvider>
    </>
  );
}

export default App;
