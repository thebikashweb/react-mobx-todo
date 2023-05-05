import React from "react";
import todoStore from "./store/todoStore";
import TodoItems from "./components/TodoItems/TodoItems";
import { observer } from "mobx-react";
import "./App.css";

const App = observer(() => {
  const [todoPayload, setTodoPayload] = React.useState("");
  const { addTodo } = todoStore;
  return (
    <>
      <div className="container">
        <h2>Todo list</h2>
        <input
          type="text"
          placeholder="Enter a todo"
          value={todoPayload}
          onChange={(e) => setTodoPayload(e.target.value)}
        />
        <button onClick={() => addTodo(todoPayload)}>Add todo</button>

        <TodoItems />
      </div>
    </>
  );
});

export default App;
