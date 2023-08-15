import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  name: string;
}
export interface TodoState {
  tasks: Todo[];
}

const initialState: TodoState = {
  tasks: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.tasks.push({ name: action.payload, id: Math.random() });
    },
  },
});

export const { add } = todoSlice.actions;

export default todoSlice.reducer;
