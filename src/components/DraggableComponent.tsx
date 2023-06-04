import React from 'react';
import './DraggableComponent.css';
import { NestedDraggableType } from '../util/types';
import DraggableComponentList from './DraggableComponentList';
import { DraggableProvidedDragHandleProps, Droppable } from 'react-beautiful-dnd';

interface DraggableComponentProps {
  data: NestedDraggableType;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
  ActiveDepthLevel: number;
}

const DraggableComponent: React.FC<DraggableComponentProps> = (props) => {
  return (
    <>
      <div className='row'>
        <div className='dragHandle'>
          <div
            {...props.dragHandleProps}
            style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              marginRight: 12,
              backgroundColor: 'red',
            }}
          />
          <span>{`${props.data.component.name}`}</span>
        </div>
      </div>
      {(
        <div className='row itemList'>
          <Droppable droppableId={props.data.component.id} isDropDisabled={(props.ActiveDepthLevel - 1) !== props.data.component.depth}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>

                <DraggableComponentList
                  data={props.data.children}
                  ActiveDepthLevel={props.ActiveDepthLevel}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </>
  );
};

export default DraggableComponent;
