import { NestedDraggableType } from './types';

export const data: NestedDraggableType[] = [
  {
    component: {
      id: 'calc',
      name: 'Calculation',
      depth: 0,
    },
    children: [
      {
        component: {
          id: 'block1',
          name: 'Block 1',
          depth: 1,
        },
        children: [
          {
            component: {
              id: 'tariffBlock',
              name: 'Tariff Block',
              depth: 2,
            },
            children: [],
          },
          {
            component: {
              id: 'conditionalBlock',
              name: 'Conditional Block',
              depth: 2,
            },
            children: [
              {
                component: {
                  id: 'if',
                  name: 'If',
                  depth: 3,
                },
                children: [
                  {
                    component: {
                      id: 'tariffIf',
                      name: 'Tariff (if)',
                      depth: 4,
                    },
                    children: [],
                  },
                ],
              },
              {
                component: {
                  id: 'else',
                  name: 'Else',
                  depth: 3,
                },
                children: [],
              },
              {
                component: {
                  id: 'elseif',
                  name: 'ElseIf',
                  depth: 3,
                },
                children: [
                  {
                    component: {
                      id: 'tariffElseIf',
                      name: 'Tariff (elseif)',
                      depth: 4,
                    },
                    children: [],
                  },
                  {
                    component: {
                      id: 'timeElseIf',
                      name: 'Time (elseif)',
                      depth: 4,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        component: {
          id: 'block2',
          name: 'Block 2',
          depth: 1,
        },
        children: [
          {
            component: {
              id: 'tariffBlock2',
              name: 'Tariff Block 2',
              depth: 2,
            },
            children: [],
          },
          {
            component: {
              id: 'conditionalBlock2',
              name: 'Conditional Block 2',
              depth: 2,
            },
            children: [
              {
                component: {
                  id: 'if2',
                  name: 'If2',
                  depth: 3,
                },
                children: [
                  {
                    component: {
                      id: 'tariff2If',
                      name: 'Tariff2 (if)',
                      depth: 4,
                    },
                    children: [],
                  },
                ],
              },
              {
                component: {
                  id: 'else2',
                  name: 'Else2',
                  depth: 3,
                },
                children: [],
              },
              {
                component: {
                  id: 'elseif2',
                  name: 'ElseIf2',
                  depth: 3,
                },
                children: [
                  {
                    component: {
                      id: 'tariff2ElseIf',
                      name: 'Tariff2 (elseif)',
                      depth: 4,
                    },
                    children: [],
                  },
                  {
                    component: {
                      id: 'time2ElseIf',
                      name: 'Time2 (elseif)',
                      depth: 4,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
