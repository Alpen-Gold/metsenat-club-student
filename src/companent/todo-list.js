import { Button, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../store/todoSlice";
let TodoList = () => {
  let massiv = useSelector((state) => state.massiv.massiv);
  console.log(massiv);
  let diipatch = useDispatch();

  return (
    <>
      {massiv.map((item) => {
        return (
          <div key={item.id}>
            <Typography>{item.name}</Typography>
            <Button onClick={() => diipatch(deleteTask({ id: item.id }))}>
              Delete
            </Button>
          </div>
        );
      })}
    </>
  );
};
export default TodoList;
