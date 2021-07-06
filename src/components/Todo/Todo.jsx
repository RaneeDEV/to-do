import { FormattedDate } from "react-intl";
import { updateTodo, deleteTodo } from "../../api/crud";
import { useTodos } from "./../../hooks/useTodos";

export default function Todo({ todo }) {
  const [, dispatchTodos] = useTodos();
  async function changeTodoStatus() {
    const updateTodoData = {
      updatedAt: Date.now(),
      status: todo.status + 1,
    };
    const [updatedTodo, updatedTodoError] = await updateTodo(todo.id, updateTodoData);
    if (updatedTodoError) {
      console.warn("updatedTodoError", updatedTodoError);
      alert("updatedTodoError");
      return;
    }
    dispatchTodos({ type: "UPDATE", payload: updatedTodo });
  }
  async function removeTodo() {
    const [, deletedTodoError] = await deleteTodo(todo.id);
    if (deletedTodoError) {
      console.warn("deletedTodoError", deletedTodoError);
      alert("deletedTodoError");
      return;
    }
    dispatchTodos({ type: "DELETE", payload: todo.id});
  }
  return (
    <div>
      <div className="todo__box">
        <h2 className="todo__title">{todo.title}</h2>
        <p className="todo__desc">{todo.body}</p>
        <div className="todo__tags-wrap">
          <p className="todo__tags">tag</p>
        </div>
        <div className="todo__dates-wrap">
        <p className="todo__date">
          Created - <FormattedDate value={todo.createdAt} hour="2-digit" minute="2-digit" />{" "}
          <FormattedDate value={todo.createdAt} />{" "}
        </p>
        {todo.updatedAt && (
          <p className="todo__date">
            Updated - <FormattedDate value={todo.updatedAt} hour="2-digit" minute="2-digit" />{" "}
            <FormattedDate value={todo.updatedAt} />{" "}
          </p>
        )}
        </div>
        {todo.status < 3 ? (
          <button onClick={changeTodoStatus} className="todo__btn todo__btn-next">Next stage <i className="far fa-hand-point-right"></i></button>
        ) : (
          <button onClick={removeTodo} className="todo__btn todo__btn-delete">Delete <i className="fas fa-times"></i></button>
        )}
      </div>
    </div>
  );
}
