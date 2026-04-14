import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todo) => {
      return todo.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });
    setInput("");
  };

  const onDelete = (id) => setTodos((todo) => todo.filter((t) => t.id !== id));
  return (
    <div className="container">
      <h1>Todo List</h1>
      <section className="input-submit">
        <input
          type="text"
          placeholder="New Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </section>

      <ul className="items-list">
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => onDelete(id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
