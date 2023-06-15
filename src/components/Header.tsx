import React, { useContext } from 'react'
import ToDoContext from '../contexts/ToDoContext';

type Props = {
    todoCount: number,
}


export default function Header(props: Props) {
  const toDoContext = useContext(ToDoContext);

  return (
    <div>You have {toDoContext.toDos.length}</div>
  )
}