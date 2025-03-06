export function ToDoHeader(props:any) {
  return (
    <div className="flex justify-between items-center gap-4 max-w-3xl mx-auto mt-16 p-4 sm:p-0">
      <div className="flex items-center gap-2">
        <h2 className="antialiased text-sm text-sky-400">Tarefas criadas</h2>
        <p className="antialiased bg-gray-900 text-white px-2 rounded-full text-sm">{props.items}</p>
      </div>
      <div className="flex items-center gap-2">
        <h2 className="antialiased text-sm text-violet-600">Concluídas</h2>
        <p className="antialiased bg-gray-900 text-white px-2 rounded-full text-sm">{props.doneItems} <span>de</span> {props.items}</p>
      </div>
    </div>
  );
}