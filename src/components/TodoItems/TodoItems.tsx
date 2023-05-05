import React from "react";
import todoStore from "../../store/todoStore";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";

const TodoItems = observer(() => {
  const { incompleteTodos, completedTodos, deleteTodo, toggleIsCompleted } =
    todoStore;
  return (
    <div className="todos-container">
      <div className="todo-container__incomplete">
        <h3>Todos</h3>
        {incompleteTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onDelete={deleteTodo}
            onToggle={toggleIsCompleted}
          />
        ))}
      </div>
      <div className="todo-container__completed">
        <h3>Completed</h3>
        {completedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onDelete={deleteTodo}
            onToggle={toggleIsCompleted}
          />
        ))}
      </div>
    </div>
  );
});

export default TodoItems;
