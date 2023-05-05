import React from "react";
import { TodoType } from "../../types/todoTypes";

interface Props extends TodoType {
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({
  id,
  title,
  isCompleted,
  onDelete,
  onToggle,
}) => {
  return (
    <div className="todo-item">
      <p>{title}</p>
      <input
        type="checkbox"
        onChange={() => onToggle(id)}
        checked={isCompleted}
      />
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
