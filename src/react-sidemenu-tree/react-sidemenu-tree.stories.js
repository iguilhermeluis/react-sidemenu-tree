import React from 'react';
import ReactSidemenuTree from '.';

export default {
  component: ReactSidemenuTree,
  title: 'ReactSidemenuTree',
};

const treeData = [
  {
    key: 'main1',
    label: 'Serviços',

    nodes: [
      {
        key: 'second-level-node-1',
        label: 'Música',
        nodes: [
          {
            key: 'third-level-node-1',
            label: 'DJ',
            nodes: [
              {
                key: 'four-level-node-1',
                label: 'eletronica',
              },
            ], // you can remove the nodes property or leave it as an empty array
          },
          {
            key: 'third-level-node-2',
            label: 'Salão',
            nodes: [
              {
                key: 'four-level-node-2',
                label: '4 node of the branch',
              },
            ], // you can remove the nodes property or leave it as an empty array
          },
        ],
      },

      {
        key: 'Luzes-level-node-1',
        label: 'Luzes',
        nodes: [
          {
            key: 'holoforte-level-node-1',
            label: 'holoforte',
            nodes: [
              {
                key: 'eletronica-level-holoforte-1',
                label: 'eletronica',
              },
            ], // you can remove the nodes property or leave it as an empty array
          },
          {
            key: 'third-fumaça-node-2',
            label: 'Caixa de fumaça',
            nodes: [
              {
                key: 'four-level-node-fumaca',
                label: '4 node of the branch',
              },
            ], // you can remove the nodes property or leave it as an empty array
          },
        ],
      },
    ],
  },
  {
    key: 'first-level-node-2',
    label: 'Brinquedos',
    nodes: [
      {
        key: 'Node-level-node-2',
        label: 'Pula-Pula',
      },
    ],
  },
];

export const defaultState = () => <ReactSidemenuTree dataTree={treeData} />;
