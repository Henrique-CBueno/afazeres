import { useState } from "react";
import { Header } from "./components/Header.tsx";
import { Form } from "./components/Form.tsx";
import { ToDo } from './components/ToDo.tsx';
import { ToDoHeader } from "./components/ToDoHeader.tsx";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar React",
      completed: false
    },
    {
      id: 2,
      text: "Estudar TypeScript",
      completed: false
    },
    {
      id: 3,
      text: "Estudar TailwindCSS",
      completed: false
    }
  ]);

  const [doneItems, setDoneItems] = useState(0);

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
  
      const done = updatedTodos.filter((todo) => todo.completed).length;
      setDoneItems(done); // Atualiza o contador de tarefas concluídas
  
      return updatedTodos; // Retorna o novo estado atualizado
    });
  };
  

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      
      setItems(updatedTodos.length); // Agora usamos updatedTodos.length corretamente
      setDoneItems(updatedTodos.filter((todo) => todo.completed).length); // Atualiza concluídos
      
      return updatedTodos; // Retorna a nova lista
    });
  };
  

  const addTodo = (text:String) => {
    const newTodos = [...todos, {
      id: todos.length + 1,
      text,
      completed: false
    }]

    setTodos(newTodos);
  }

  const [items, setItems] = useState(todos.length);

  const handleAddItem = () => {
    setItems(todos.length + 1);
  };

  return (
    <div className="bg-neutral-700 w-screen h-screen p-4 sm:p-0">
      <Header/>
      <Form onAddItem={handleAddItem} addTodo={addTodo} />
      <div>
        <ToDoHeader items={items} doneItems={doneItems} />
        <div className="grid gap-5 mt-12 max-h-[35rem] overflow-auto">
          {
            todos.map((todo) => (
              <ToDo  
              key={todo.id} 
              text={todo.text} 
              completed={todo.completed} 
              toggleTodo={() => toggleTodo(todo.id)}
              removeTodo={() => removeTodo(todo.id)}
                />
            ))
          } 
        </div>
      </div>
    </div>
  );
}

export default App;
