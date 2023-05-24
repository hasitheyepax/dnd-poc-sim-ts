import React from 'react';
import './DraggableComponent.css';
import { NestedDraggableType } from '../util/types';
import DraggableComponentList from './DraggableComponentList';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

interface DraggableComponentProps {
  data: NestedDraggableType;
  dataPath?: string;
  index: number;
}

const DraggableComponent: React.FC<DraggableComponentProps> = (props) => {
  return (
    <>
      <Draggable key={props.index} index={props.index} draggableId={`component_${props.index}`}>
        {(provided: DraggableProvided) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            {props.data.children.length > 0 ? (
              <DraggableComponentList
                data={props.data.children}
                listName={props.data.component.name}
                dataPath={props.dataPath + '.children'}
              />
            ) : (
              <div className="container">
                <div
                  {...provided.dragHandleProps}
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    backgroundColor: 'red',
                  }}
                />
                <span>{`${props.data.component.name}`}</span>
              </div>
            )}
          </div>
        )}
      </Draggable>
    </>
  );
};

export default DraggableComponent;
