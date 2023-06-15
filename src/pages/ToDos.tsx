import { useContext, useState } from 'react';
import ToDoContext from '../contexts/ToDoContext';

export default function ToDos() {
  const toDoContext = useContext(ToDoContext);
  const [input, setInput] = useState<string>('');

  return (
    <div>
      <div>
        {toDoContext.toDos.map((e, index) => {
          return <div key={index.toString()}>{e}</div>;
        })}
      </div>
      <input type={'text'} value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={(e) => {
          toDoContext.setToDos((value: string[]) => {
            if (input) {
              value.push(input);
            }
            return value;
          });
          setInput('');
        }}
      >
        add
      </button>
    </div>
  );
}
