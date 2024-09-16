import { useCallback, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Handle } from 'reactflow';
import 'reactflow/dist/style.css'; // Corrected import path
import Parents from './Parent'; // Assuming correct file name
import BTNS from './Buttons';
import Dot from './components/Dot';
import Body from './Body';
import Excitation from './components/Excitation';




const nodeTypes = {
  customNode: Excitation,
  TestNode: Dot
};

const initialNodes = [
  { id: '1', type: "customNode", position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: '2', type: "TestNode", position: { x: 8, y: 50 }, data: { label: 'Node 2' } },
  { id: '3', type: "customNode", position: { x: 0, y: 100 }, data: { label: 'Node 3' } },
  { id: '4', type: "customNode", position: { x: 110, y: 0 }, data: { label: 'Node 1' } }
];

const initialEdges = [
  { id: 'e1-2', type: "straight", source: '1', target: '2' },
  { id: 'e2-3', type: "straight", source: '2', target: '3' },
  { id: 'e3-4', type: "straight", source: '2', target: '4' }
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
