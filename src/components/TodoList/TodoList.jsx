import { useTodos } from "./../../hooks/useTodos";
import Todo from "./../Todo/Todo";

export default function TodoList({ status }) {
  const [todos] = useTodos();
  return (
    <>
      {[...todos]
        .filter((todo) => todo.status === status)
        .sort((a, b) => b.priority - a.priority || b.updatedAt - a.updatedAt || b.createdAt - a.createdAt)
        .map((todo) => (
          <Todo key={todo.id} todo={todo}></Todo>
        ))}
    </>
  );
}
