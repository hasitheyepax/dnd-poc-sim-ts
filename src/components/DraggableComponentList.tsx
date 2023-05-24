import { DragDropContext, Droppable, DroppableProvided, OnDragEndResponder } from 'react-beautiful-dnd';
import { NestedDraggableType } from '../util/types';
import DraggableComponent from './DraggableComponent';
import './DraggableComponentList.css';
import uuid from 'react-uuid';

interface DraggableComponentListProps {
  listName?: string;
  data: NestedDraggableType[];
  droppableProvided?: DroppableProvided;
  dataPath?: string;
}

const DraggableComponentList: React.FC<DraggableComponentListProps> = (props) => {
  const onDragEnd: OnDragEndResponder = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    let temp: NestedDraggableType;
    temp = props.data[destination.index];
    props.data[destination.index] = props.data[source.index];
    props.data[source.index] = temp;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'components-' + props.dataPath}>
        {(provided: DroppableProvided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} style={{ flexGrow: 1 }}>
            <div className="list">
              <div>{props.listName}</div>
              <br />
              {props.data.map((component, index) => (
                <DraggableComponent
                  key={uuid()}
                  data={component}
                  dataPath={props.dataPath + '[' + index + ']'}
                  index={index}
                />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableComponentList;
