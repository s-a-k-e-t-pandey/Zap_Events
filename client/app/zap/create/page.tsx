'use client'
// import { useState } from "react";
// import { ZapCell } from "@/componets/ZapCell";

// export default function() {
//     const [selectedTrigger, setSelectedTrigger] = useState("");
//     const [selectedAction, setSelectedAction] = useState([]);


//     return <div>
//         <div className="flex justify-center w-full min-h-screen bg-slate-200">
//             <ZapCell name={selectedTrigger ? selectedTrigger : "Trigger"} index={1}></ZapCell>
//         </div>
//     </div> 
// }
import React, { useCallback, useState } from "react";
import "@xyflow/react/dist/style.css";
import {
    Connection,
    ReactFlow,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    getStraightPath,
    BaseEdge,
    type EdgeProps,
    type Node,
    type Edge,
    type NodeProps,
    type FitViewOptions,
    type OnConnect,
    type OnNodesChange,
    type OnEdgesChange,
    type OnNodeDrag,
    type NodeTypes,
    type DefaultEdgeOptions,
  } from '@xyflow/react';
   
import TriggerNode from "../../../componets/workflow/TriggerNode";
import ActionNode from "../../../componets/workflow/ActionNode";

const nodeTypes: NodeTypes = {
  trigger: TriggerNode,
  action: ActionNode,
};

export default function FlowDiagram() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: "1", position: { x: 100, y: 100 }, data: { label: "Start Trigger" }, type: "trigger" }
  ]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onConnect = useCallback((params: Connection) =>
    setEdges((eds) => addEdge(params, eds)), []);

  const addTriggerNode = () => {
    const newNode: Node = {
      id: `trigger-${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `Trigger ${nodes.length + 1}` },
      type: "trigger",
    };
    setNodes((prev) => [...prev, newNode]);
  };

  const addActionNode = () => {
    const newNode: Node = {
      id: `action-${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `Action ${nodes.length + 1}` },
      type: "action",
    };
    setNodes((prev) => [...prev, newNode]);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <button onClick={addTriggerNode} style={{ margin: "5px" }}>Add Trigger</button>
      <button onClick={addActionNode} style={{ margin: "5px" }}>Add Action</button>

      <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect} nodeTypes={nodeTypes}>
      </ReactFlow>
    </div>
  );
}
