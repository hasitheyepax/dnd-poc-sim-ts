import { createContext } from 'react'
export type ToDoType = {
    toDos: string[], 
    setToDos: Function,
}
const ToDoContext = createContext<ToDoType>({
    toDos: [],
    setToDos: () => {},
});

export default ToDoContext;