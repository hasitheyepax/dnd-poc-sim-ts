import './App.css';
import DraggableComponentList from './components/DraggableComponentList';
import DragDropComponent from './components/DragDropComponent';
import { data } from './util/data';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  // return (
  //   <div className="App">
  //     <DragDropContext onDragEnd={() => null}>
  //       <DraggableComponentList listName="main" data={data} dataPath={''} />
  //     </DragDropContext>
  //   </div>
  // );
  return(
    <div className="App">
      <DragDropComponent/>
    </div>
  );
}

export default App;
