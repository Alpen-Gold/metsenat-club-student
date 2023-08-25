import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
  name: "massiv",
  initialState: {
    massiv: [],
  },

  reducers: {
    addNewTodo(state, action) {
      console.log(state, "satate", action, "action");

      state.massiv.push({
        name: action.payload.inputValue,
        id: state.massiv.length + 1,
      });

      action.payload = "";
    },
    deleteTask(state, action) {
      console.log(state, "satate", action, "action");

      state.massiv = state.massiv.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});

export let { addNewTodo, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
