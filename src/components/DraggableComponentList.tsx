import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { NestedDraggableType } from '../util/types';
import DraggableComponent from './DraggableComponent';
import './DraggableComponentList.css';

interface DraggableComponentListProps {
  data: NestedDraggableType[];
  ActiveDepthLevel: number;
}

const DraggableComponentList: React.FC<DraggableComponentListProps> = (props) => {

  return (
    <>
      {props.data.map((component, index) => (
        <Draggable key={component.component.id} index={index} draggableId={component.component.id}>
          {(provided: DraggableProvided) => (
            <div ref={provided.innerRef} {...provided.draggableProps}>

              <div className="list" style={{ backgroundColor: `rgba(0, 0, 0, ${(component.component.depth / 10)})` }}>
                <DraggableComponent
                  data={component}
                  ActiveDepthLevel={props.ActiveDepthLevel}
                  dragHandleProps={provided.dragHandleProps}
                />
              </div>

            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default DraggableComponentList;
