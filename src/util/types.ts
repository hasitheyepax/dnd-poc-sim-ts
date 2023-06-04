export type DraggableType = {
  id: string;
  name: string;
  depth: number;
};

export type NestedDraggableType = {
  component: DraggableType;
  children: NestedDraggableType[];
};
