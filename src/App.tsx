import React, { useCallback, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Handle } from 'reactflow';
import { Position } from 'reactflow';
import 'reactflow/dist/style.css'; // Corrected import path
import viteLogo from '/vite.svg';
import react from './assets/react.svg';
import dot from './assets/Ellipse 4.svg';
import Parents from './Parent'; // Assuming correct file name
import BTNS from './Buttons';
import Barcode from 'react-barcode';

import Body from './Body';

function TextUpdaterNode({ data }) {
  return (
    <>
      <Handle style={{border: 0 , width: "1px", height: "1px"}} type="target" position={Position.Top} />
      <div>
        <img onClick={() => alert(data.label)} width={20} height={20} alt='Node icon' src={viteLogo} />
      </div>
      <Handle style={{border: 0 , width: "1px", height: "1px"}} type="source" position={Position.Bottom} id="a" />
      <Handle style={{border: 0 , width: "1px", height: "1px"}} type="source" position={Position.Right} id="a" />
      <Handle style={{border: 0 , width: "1px", height: "1px"}} type="source" position={Position.Left} id="a" />
      <Handle style={{border: 0 , width: "1px", height: "1px"}} type="source" position={Position.Bottom} id="b" />
    </>
  );
}

function Test() {
  return (
    <>
      <Handle type="target" position={Position.Top} style={{zIndex: -123, backgroundColor: "white",top: 15,border: 0 , width: "1px", height: "1px"}} />
      <div>
        <img width={"5px"} height={"5px"} src={dot} alt="React logo" />
      </div>
      <Handle style={{border: 0 , width: "0px", height: "0px", bottom: "7px", backgroundColor: "white",zIndex: -123 }} type="source" position={Position.Bottom} id="a" />
      <Handle style={{border: 0 , width: "1px", height: "1px"}} type="source" position={Position.Right} id="a" />
    </>
  );
}

const nodeTypes = {
  customNode: TextUpdaterNode,
  TestNode: Test
};

const initialNodes = [
  { id: '4', type: "customNode", position: { x: 110, y: 0 }, data: { label: 'Node 1' } },
  { id: '1', type: "customNode", position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: '2', type: "TestNode", position: { x: 8, y: 50 }, data: { label: 'Node 2' } },
  { id: '3', type: "customNode", position: { x: 0, y: 100 }, data: { label: 'Node 3' } },
];

const initialEdges = [
  { id: 'e1-2', type: "straight", source: '1', target: '2' },
  { id: 'e2-3', type: "straight", source: '2', target: '3' }
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  useEffect(() => {
    console.log(nodes, edges);
  });

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: "straight" }, eds)),
    [setEdges]
  );

  return (
    <>
      <button onClick={() => {
        setNodes([...nodes, 
          { 
            id: (nodes.length + 1).toString(), type: "customNode", position: { x: 100, y: 50 }, data: { label: 'New Node' } }])
      }}>Add Vite Logo</button>

      <button onClick={() => {
        setNodes([...nodes, { id: (nodes.length + 1).toString(), type: "TestNode", position: { x: 100, y: 100 }, data: { label: 'Another Node' } }])
      }}>Add React Logo</button>

      <div style={{ border: "solid 1px black", width: '40vw', height: '80vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          nodeTypes={nodeTypes}
          onConnect={onConnect}
        />
      </div>
      <Parents BTNSProps={{ title: "This is the button :)" }} BTNS={BTNS} Body={Body} />
    </>
  );
}
