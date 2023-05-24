import React from 'react';
import './DraggableComponent.css';
import { NestedDraggableType } from '../util/types';
import DraggableComponentList from './DraggableComponentList';

interface DraggableComponentProps {
  component: NestedDraggableType;
}

const DraggableComponent: React.FC<DraggableComponentProps> = (props) => {
  if (props.component.children.length === 0) {
    return (
      <div className="container">
        <span>{`${props.component.component.name}`}</span>
      </div>
    );
  }

  return <DraggableComponentList data={props.component.children} listName={props.component.component.name} />;
};

export default DraggableComponent;
