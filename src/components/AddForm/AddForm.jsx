import "./AddForm.css";
import { useTodos } from "./../../hooks/useTodos";
import { addTodo } from "../../api/crud";

export default function AddForm() {
  const [, dispatchTodos] = useTodos();
  async function createTodo(e) {
    e.preventDefault();
    const { title, body, priority } = e.target;
    const newTodo = {
      title: title.value,
      body: body.value,
      createdAt: Date.now(),
      updatedAt: null,
      status: 1,
      priority: +priority.value
    };
    const [createdTodo, createdTodoError] = await addTodo(newTodo);
    if (createdTodoError) {
      console.warn("createdTodoError", createdTodoError);
      alert("createdTodoError");
      return;
    }
    dispatchTodos({ type: "ADD", payload: createdTodo });
    e.target.reset()
  }
  return (
    <form className="add-form" onSubmit={createTodo}>
      <input type="text" name="title" className="title-form" placeholder="Title"/>
      <textarea name="body" placeholder="Description ..." className="body-form"></textarea>
      <select name="priority" defaultValue="2">
        <option value="0" disabled>Choose a priority variant</option>
        <option value="1">Low</option>
        <option value="2" selected>Regular</option>
        <option value="3">High</option>
      </select>
      <button type="submit" className="form-btn">Add todo</button>
    </form>
  );
}
