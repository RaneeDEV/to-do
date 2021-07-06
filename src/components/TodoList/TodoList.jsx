
import { useTodos } from './../../hooks/useTodos';
import Todo from './../Todo/Todo';


export default function TodoList({status}) {
    const [todos] = useTodos()
    return (
        <>
            {[...todos].filter(todo => todo.status === status).map(todo => <Todo key={todo.id} todo={todo}></Todo>)}
        </>
    )
}
