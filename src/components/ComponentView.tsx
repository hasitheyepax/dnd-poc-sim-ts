import { DragDropContext, DragStart, DropResult, Droppable, DroppableProvided } from "react-beautiful-dnd";
import DraggableComponentList from "./DraggableComponentList";
import { NestedDraggableType } from "../util/types";
import { useState } from "react";

interface ComponentViewProps {
  data: NestedDraggableType[];
}


const getItemById = (items: NestedDraggableType[] | null, id: string, index: number | null = null): NestedDraggableType | null => {
  if (items) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.component.id === id) {
        if (index !== null && item.children) {
          return item.children[index];
        } else {
          return item;
        }
      }
      if (item.children) {
        const nestedItem = getItemById(item.children, id, index);
        if (nestedItem) return nestedItem;
      }
    }
  }
  return null;
};

const ComponentView: React.FC<ComponentViewProps> = (props) => {


  const [ActiveDepthLevel, setActiveDepthLevel] = useState<number>(0);
  
  const onBeforeDragStart = (dragStart: DragStart) => {
    const newItems = [...(props.data || [])];
    const item = getItemById(newItems, dragStart.draggableId);
    console.log('drag',dragStart, item);
    setActiveDepthLevel(item?.component.depth ?? 0);
  };
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return; // Return if dropped outside a droppable area


    const { source, destination } = result;
    const newItems = [...(props.data || [])];
    const draggedItem = getItemById(newItems, source.droppableId, source.index);
    const targetParent = getItemById(newItems, destination.droppableId);
    const targetIndex = destination.index;

    if (draggedItem && targetParent) {
      if (source.droppableId === destination.droppableId) {
        // Reorder items within the same parent
        const parent = getItemById(newItems, source.droppableId);
        if (parent && parent.children) {
          parent.children.splice(source.index, 1);
          parent.children.splice(destination.index, 0, draggedItem);
        }
      } else {
        // Move item to a different parent
        const sourceParent = getItemById(newItems, source.droppableId);
        if (sourceParent && sourceParent.children && targetParent.children) {
          sourceParent.children.splice(source.index, 1);
          targetParent.children.splice(targetIndex, 0, draggedItem);
        }
      }
    }

    setActiveDepthLevel(0);
    console.log('data', props.data);
    
  };

  return (<>
    <DragDropContext onDragEnd={handleDragEnd} onBeforeDragStart={onBeforeDragStart}>
      <Droppable droppableId="root">
        {(provided: DroppableProvided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} style={{ flexGrow: 1 }}>
            <DraggableComponentList data={props.data} ActiveDepthLevel = {ActiveDepthLevel}/>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext></>);
}

export default ComponentView;