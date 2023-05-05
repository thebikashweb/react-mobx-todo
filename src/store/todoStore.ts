import { makeAutoObservable } from "mobx";
import { TodoType } from "../types/todoTypes";
import { v4 as uuidv4 } from "uuid";

class TodoStore {
  todos: Array<TodoType> = [];

  constructor() {
    makeAutoObservable(this);
  }

  get incompleteTodos() {
    return this.todos.filter((todo) => !todo.isCompleted);
  }
  get completedTodos() {
    return this.todos.filter((todo) => todo.isCompleted);
  }

  addTodo = (title: string) => {
    console.log("this is being called", title);
    const todoPayload = {
      title,
      id: uuidv4(),
      isCompleted: false,
    };
    this.todos.push(todoPayload);
  };

  toggleIsCompleted = (id: string) => {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos[index] = {
      ...this.todos[index],
      isCompleted: !this.todos[index].isCompleted,
    };
  };
  deleteTodo = (id: string) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

const todoStore = new TodoStore();
export default todoStore;
