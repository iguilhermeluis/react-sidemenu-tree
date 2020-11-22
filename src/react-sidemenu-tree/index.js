import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CtrlMenuTree } from "../services/CtrlMenuTree";

const ContainerCategory = styled.div`
  margin: 0;
  padding: 0;
  margin-top: 100px;
`;

const ItemCategory = styled.li`
  align-items: center;
  border: 1px solid #d2d2d2;
  display: flex;
  font-family: MuseoSans-300, Arial, Helvetica, sans-serif;
  font-size: 14px;
  cursor: pointer;
  justify-content: space-between;

  height: 45px;
  color: #4a4a4a;
  padding-left: 1rem;
  padding-right: 1rem;

  background: ${(props) => (props.isEnabled ? "#000" : "")};
  color: ${(props) => (props.isEnabled ? "#fff" : "")};
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  width: 15rem;
  position: relative;
  ul {
    position: absolute;
    right: -17rem;
  }
`;

const ReactSidemenuTree = () => {
  // as an array
  const treeData = [
    {
      key: "main1",
      label: "Serviços",

      nodes: [
        {
          key: "second-level-node-1",
          label: "Música",
          nodes: [
            {
              key: "third-level-node-1",
              label: "DJ",
              nodes: [
                {
                  key: "four-level-node-1",
                  label: "eletronica",
                },
              ], // you can remove the nodes property or leave it as an empty array
            },
            {
              key: "third-level-node-2",
              label: "Salão",
              nodes: [
                {
                  key: "four-level-node-2",
                  label: "4 node of the branch",
                },
              ], // you can remove the nodes property or leave it as an empty array
            },
          ],
        },

        {
          key: "Luzes-level-node-1",
          label: "Luzes",
          nodes: [
            {
              key: "holoforte-level-node-1",
              label: "holoforte",
              nodes: [
                {
                  key: "eletronica-level-holoforte-1",
                  label: "eletronica",
                },
              ], // you can remove the nodes property or leave it as an empty array
            },
            {
              key: "third-fumaça-node-2",
              label: "Caixa de fumaça",
              nodes: [
                {
                  key: "four-level-node-fumaca",
                  label: "4 node of the branch",
                },
              ], // you can remove the nodes property or leave it as an empty array
            },
          ],
        },
      ],
    },
    {
      key: "first-level-node-2",
      label: "Brinquedos",
      nodes: [
        {
          key: "Node-level-node-2",
          label: "Pula-Pula",
        },
      ],
    },
  ];

  const SubCategory = ({ el, level }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const handlerClick = () => {
      setIsEnabled(true);
      CtrlMenuTree.send({ data: el, level: level });
    };
    useEffect(() => {
      let ctrl = CtrlMenuTree.get().subscribe(async (message) => {
        if (message.value.level >= level && !(el.key == message.value.data.key))
          setIsEnabled(false);
      });
      return function cleanup() {
        ctrl.unsubscribe();
      };
    }, []);

    let CheckedSVG = () => {
      return (
        <svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
          <path
            d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
            fill="#FFF"
            fillRule="evenodd"
          ></path>
        </svg>
      );
    };

    let ArrowRightSVG = ({ color }) => {
      return (
        <svg
          width="7"
          height="13"
          viewBox="0 0 7 13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.806 5.938l-3.93-4.759c-.228-.275-.565-.228-.753.105-.189.333-.157.827.071 1.102l3.439 4.137-3.435 4.087c-.23.272-.264.765-.078 1.1.186.336.522.387.752.115l3.93-4.676c.262-.312.264-.896.004-1.211z"
            stroke={color}
            strokeWidth=".9"
            fill={color}
            fillRule="evenodd"
          ></path>
        </svg>
      );
    };

    return (
      <ItemCategory isEnabled={isEnabled} onClick={() => handlerClick()}>
        {el.label} {level}{" "}
        {Array.isArray(el.nodes) ? (
          <ArrowRightSVG color={isEnabled ? "#fff" : "#ccc"} />
        ) : (
          <CheckedSVG />
        )}
        {isEnabled && Array.isArray(el.nodes) && (
          <Ul>
            {el.nodes.map((el2) => (
              <SubCategory key={el2.key} el={el2} level={level + 1} />
            ))}
          </Ul>
        )}
      </ItemCategory>
    );
  };

  return (
    <ContainerCategory>
      <Ul>
        {treeData.map((el) => (
          <SubCategory key={el.key} isChildren={false} el={el} level={1} />
        ))}
      </Ul>
    </ContainerCategory>
  );
};

export default ReactSidemenuTree;
