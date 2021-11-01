
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const response = await fetch("http://localhost:5000/employees/getemployee");
    if (response.status === 200) {
      const todos = await response.json();
      return { todos: todos.message };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload)=> {
    const response = await fetch(
      "http://localhost:5000/employees/addemployee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: payload.firstname,
          lastname: payload.lastname,
          email: payload.email,
        }),
      }
    );
    if (response.status == 200) {
      const todo = await response.json();
      return { todo: todo.message };
    } else {
      return { todo: "" };
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/delteTodoAsync",
  async (payload) => {

    return { todo: payload.id };
  }
);

export const searchTodoAsync = createAsyncThunk(
  "todos/searchTodoAsync",
  async (payload) => {
    const response = await fetch(
      `http://localhost:5000/employees/search/${payload.search}`,
      {
        method: "GET",
      }
    );
    const todos = await response.json();

    if (response.status === 200) {
      return { todos: todos.message };
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      if (action.payload.todo == "") {
        toast.error("This Email is already Exist", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        state.push(action.payload.todo);
      }
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo._id !== action.payload.todo);
    },
    [searchTodoAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
