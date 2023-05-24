export type DraggableType = {
  id: string;
  name: string;
};

export type NestedDraggableType = {
  component: DraggableType;
  children: NestedDraggableType[];
};
