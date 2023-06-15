import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface Item {
  id: string;
  content: string;
  children: Item[];
}

interface NestedDragDropProps {
  items: Item[];
}

const NestedDragDrop: React.FC<NestedDragDropProps> = ({ items }) => {
  const [nestedItems, setNestedItems] = useState<Item[]>(items);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const updatedItems = [...nestedItems];
    const source = result.source;
    const destination = result.destination;

    // Reordering within the same level
    if (source.droppableId === destination.droppableId) {
      const droppableIndex = parseInt(source.droppableId, 10);
      const [removed] = updatedItems[droppableIndex].children.splice(source.index, 1);
      updatedItems[droppableIndex].children.splice(destination.index, 0, removed);
    }
    // Moving between levels
    else {
      const sourceDroppableIndex = parseInt(source.droppableId, 10);
      const destinationDroppableIndex = parseInt(destination.droppableId, 10);
      const [removed] = updatedItems[sourceDroppableIndex].children.splice(source.index, 1);
      updatedItems[destinationDroppableIndex].children.splice(destination.index, 0, removed);
    }

    setNestedItems(updatedItems);
  };

  const renderItems = (items: Item[]) => {
    return items.map((item, index) => (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {item.content}
            {item.children.length > 0 && (
              <Droppable droppableId={index.toString()}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {renderItems(item.children)}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
          </div>
        )}
      </Draggable>
    ));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="nested-list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {renderItems(nestedItems)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default NestedDragDrop;
