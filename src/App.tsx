import './App.css';
import DraggableComponentList from './components/DraggableComponentList';
import DragDropComponent from './components/DragDropComponent';
import { data } from './util/data';
import { DragDropContext } from 'react-beautiful-dnd';
import ToDos from './pages/ToDos';
import Header from './components/Header';
import ToDoContext from './contexts/ToDoContext';
import { useState } from 'react';

function App() {
  // return (
  //   <div className="App">
  //     <DragDropContext onDragEnd={() => null}>
  //       <DraggableComponentList listName="main" data={data} dataPath={''} />
  //     </DragDropContext>
  //   </div>
  // );
  const [toDos, setToDos] = useState([]);
  return(
    <ToDoContext.Provider value={{toDos, setToDos}}>
    <div className="App">
      <Header todoCount={0}/>
      <ToDos/>
      {/* <DragDropComponent/> */}

    </div>
    </ToDoContext.Provider>
  );
}

export default App;
