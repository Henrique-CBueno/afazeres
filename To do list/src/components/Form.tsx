import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

export function Form() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyLetters = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "").trim();
    setText(onlyLetters);
    console.log(onlyLetters)
  };

  return (
    <form className="flex justify-center items-center gap-3.5 -mt-8">
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        className="bg-gray-500 w-2xl border-none outline-none p-5 rounded-md text-base placeholder-gray-300"
        value={text}
        onChange={handleChange}
      />
      <button
        className="flex items-center justify-center gap-2 bg-gray-400 w-24 h-16 cursor-pointer rounded-md text-sm transition-all duration-500 text-white border-none outline-none hover:bg-amber-300"
      >
        Criar <span><CiCirclePlus color="white" /></span>
      </button>
    </form>
  );
}

