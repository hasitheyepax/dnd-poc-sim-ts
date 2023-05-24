import { NestedDraggableType } from '../util/types';
import DraggableComponent from './DraggableComponent';
import './DraggableComponentList.css';
import uuid from 'react-uuid';

interface DraggableComponentListProps {
  listName?: string;
  data: NestedDraggableType[];
}

const DraggableComponentList: React.FC<DraggableComponentListProps> = (props) => {
  return (
    <div className="list">
      <div>{props.listName}</div>
      <br />
      {props.data.map((component) => (
        <DraggableComponent key={uuid()} component={component} />
      ))}
    </div>
  );
};

export default DraggableComponentList;
