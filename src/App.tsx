import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Handle } from 'reactflow';
import { Position } from 'reactflow';
import 'reactflow/dist/style.css';
import viteLogo from '/vite.svg'
import react from './assets/react.svg';
function TextUpdaterNode({ data }) {

  return (
    <>
       <Handle type="target" position={Position.Top} />
      <div>
        <img width={20} height={20} alt='asdfasdf' src={viteLogo} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
      />
    </>
  );
}

function Test () {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <img width={20} height={20} src={react} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      
    </>
  );
}

const nodeTypes = {
  customNode: TextUpdaterNode, // Define the custom node type
  TestNode: Test
};
const initialNodes = [
  { id: '1',type: "customNode", position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', type: "TestNode", position: { x: 0, y: 50 }, data: { label: '2' } },
  { id: '3', type: "customNode", position: { x: 0, y: 100 }, data: { label: '3' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' },{ id: 'e2-3', source: '2', target: '3' }];
 
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <>
      <button onClick={() => {
      setNodes([...nodes, { id: (nodes.length + 1).toString(),
         type: "customNode", position: { x: 100, y: 50 }, data: { label: '3' } 
        }])
    }} >Add vite logo</button>

<button onClick={() => {
      setNodes([...nodes, { id: (nodes.length + 1).toString(),
         type: "TestNode", position: { x: 100, y: 50 }, data: { label: '3' } 
        }])
    }} >Add react logo</button>
    <div style={{ border: "solid 2px white",width: '40vw', height: '80vh' }}>
    
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      proOptions={{hideAttribution: true}}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    />
  </div>
    </>
    
  );
}