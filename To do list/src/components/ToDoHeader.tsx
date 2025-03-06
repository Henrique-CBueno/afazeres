import { useState } from "react";

interface ToDoHeaderProps {
  items: number;
}

export function ToDoHeader({ items }: ToDoHeaderProps) {
  const [doneItems, setDoneItems] = useState(0);

  return (
    <div className="flex justify-between items-center gap-4 max-w-3xl mx-auto mt-16">
      <div className="flex items-center gap-2">
        <h2 className="antialiased text-sm text-sky-400">Tarefas criadas</h2>
        <p className="antialiased bg-gray-900 text-white px-2 rounded-full text-sm">{items}</p>
      </div>
      <div className="flex items-center gap-2">
        <h2 className="antialiased text-sm text-violet-600">Concluídas</h2>
        <p className="antialiased bg-gray-900 text-white px-2 rounded-full text-sm">{doneItems} <span>de</span> {items}</p>
      </div>
    </div>
  );
}