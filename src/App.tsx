import './App.css';
import DraggableComponentList from './components/DraggableComponentList';
import { data } from './util/data';

function App() {
  return (
    <div className="App">
      <DraggableComponentList listName="main" data={data} />
    </div>
  );
}

export default App;
