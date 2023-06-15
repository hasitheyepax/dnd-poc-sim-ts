import { NestedDraggableType } from './types';

export const data: NestedDraggableType[] = [
  {
    component: {
      id: 'ath',
      name: 'Athletics',
    },
    children: [
      {
        component: {
          id: 'ath-1',
          name: 'Swimming',
        },
        children: [],
      },
      {
        component: {
          id: 'ath-2',
          name: 'Marathon',
        },
        children: [],
      },
      {
        component: {
          id: 'ath-3',
          name: 'Cycling',
          type: 'logic_bloc',
        },
        children: [
          {
            component: {
              id: 'c-1',
              name: 'Cycling Categories',
              type: 'if',
            },
            children: [
              {
                component: {
                  id: 'off',
                  name: 'Off Road Cycling',
                },
                children: [],
              },
            ],
          },
          {
            component: {
              id: 'moto',
              name: 'Moto GP',
              type: 'else',
            },
            children: [
              {
                component: {
                  id: 'us',
                  name: 'USA',
                },
                children: [],
              },
              {
                component: {
                  id: 'eur',
                  name: 'Europe',
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        component: {
          id: 'de-1',
          name: 'Navy',
        },
        children: [],
      },
      {
        component: {
          id: 'de-2',
          name: 'Marines',
        },
        children: [],
      },
    ],
  },
];
