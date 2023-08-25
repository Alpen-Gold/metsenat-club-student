import { Button, Form } from "antd";

let Forms = (props) => {
  return (
    <>
      <input
        type="text"
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
        style={{ backgroundColor: "red", padding: "20px" }}
      />

      <Button onClick={() => props.addNewTodo()}>add</Button>
    </>
  );
};

export default Forms;
