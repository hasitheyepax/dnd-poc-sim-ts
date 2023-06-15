export type DraggableType = {
  id: string;
  name: string;
  type?: string;
};

export type NestedDraggableType = {
  component: DraggableType;
  children: NestedDraggableType[];
};
