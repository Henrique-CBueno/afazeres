import { useState } from "react";
import { FaRegCheckCircle, FaRegTrashAlt } from "react-icons/fa";

interface ToDoProps {
  text: string;
  completed: boolean;
  toggleTodo: () => void;
  removeTodo: () => void;
}

export function ToDo({ text, completed, toggleTodo, removeTodo }: ToDoProps) {
  const [hover, setHover] = useState(false);
  const [trashColor, setTrashColor] = useState("black");

  return (
    <div className="flex items-center justify-between space-x-4 p-4 max-w-3xl mx-auto bg-purple-500 rounded-2xl w-full">
      <FaRegCheckCircle
        color={hover ? (completed ? "black" : "white") : completed ? "white" : "black"}
        onClick={toggleTodo}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="cursor-pointer transition-colors duration-200"
      />

      <h1 className={`text-lg ${completed ? "line-through text-gray-400" : ""}`}>
        {text}
      </h1>

      <FaRegTrashAlt
        className="cursor-pointer transition-colors duration-200"
        color={trashColor}
        onMouseEnter={() => setTrashColor("red")}
        onMouseLeave={() => setTrashColor("black")}
        onClick={removeTodo} // Remove o item ao clicar
      />
    </div>
  );
}
