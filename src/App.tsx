import './App.css';
import { data } from './util/data';
import ComponentView from './components/ComponentView';


function App() {
  return (
    <div className="App">
      <ComponentView data = {data}/>
    </div>
  );
}

export default App;
