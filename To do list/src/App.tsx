import { useState } from "react";
import { Header } from "./components/Header.tsx";
import { Form } from "./components/Form.tsx";
import { ToDo } from './components/ToDo.tsx';
import { ToDoHeader } from "./components/ToDoHeader.tsx";

function App() {
  const [items, setItems] = useState(0);

  const handleAddItem = () => {
    setItems(prevItems => prevItems + 1);
  };

  return (
    <div className="bg-neutral-700 w-screen h-screen">
      <Header />
      <Form onAddItem={handleAddItem} />
      <div>
        <ToDoHeader items={items} />
        <ToDo />
      </div>
    </div>
  );
}

export default App;
