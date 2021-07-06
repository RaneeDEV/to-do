import axios from "axios";
import { BASE_URL, endpoints } from "./contants";

const crud = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
});

crud.interceptors.response.use(
    function (response) {
        return [response.data, null];
    },
    function (error) {
        return [null, error];
    }
);
// async function test() {
//     const [todos, todosError] = await getTodos()
//     console.log(todos, todosError);
// }
// test()

export async function getTodos() {
    return await crud.get(endpoints.todos);
}
export async function getTodo(todoId) {
    return await crud.get(endpoints.todos + todoId);
}
export async function addTodo(todoData) {
    return await crud.post(endpoints.todos, todoData);
}
export async function updateTodo(todoId, todoData) {
    return await crud.patch(endpoints.todos + todoId, todoData);
}
export async function deleteTodo(todoId) {
    return await crud.delete(endpoints.todos + todoId);
}
