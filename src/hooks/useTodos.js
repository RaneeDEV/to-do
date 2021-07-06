import { useContext, useReducer, createContext, useEffect } from "react";
import { getTodos } from "../api/crud";

const initialState = []

const Context = createContext()
export const useTodos = () => useContext(Context)
const TodosProvider = ({ children }) => {
    const [data, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        (async function () {
            const [todos, todosError] = await getTodos()
            if (todosError) {
                console.warn('todosError', todosError);
                alert('todosError')
                return
            }
            dispatch({ type: 'INIT', payload: todos })
        })()
    }, [])
    function reducer(state, action) {
        switch (action.type) {
            case 'INIT':
                return [...action.payload]
            case 'UPDATE': {
                const todoIdx = state.findIndex(todo => todo.id === action.payload.id)
                const newTodos = [...state]
                if (todoIdx !== -1) {
                    newTodos.splice(todoIdx, 1, action.payload)
                }
                return newTodos
            }
            case 'DELETE': {
                const todoIdx = state.findIndex(todo => todo.id === action.payload)
                const newTodos = [...state]
                if (todoIdx !== -1) {
                    newTodos.splice(todoIdx, 1)
                }
                return newTodos
            }
            default:
                throw new Error('Wrong action type!')
        }
    }
    return <Context.Provider value={[data, dispatch]}>{children}</Context.Provider>
}
export default TodosProvider