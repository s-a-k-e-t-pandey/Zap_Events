import React from "react";
import { Handle, Position } from "@xyflow/react";

interface ZapNodeProps {
  data: {
    emoji: string;
    name: string;
    job: string;
    onAdd: () => void; // Function to call when the add button is clicked
    onSelect: (type: string) => void; // Function to select type
  };
}

function ZapNode({ data }: ZapNodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />

      <div className="flex justify-between mt-2">
        <button onClick={() => data.onSelect("trigger")} className="bg-blue-500 text-white px-2 py-1 rounded">Trigger</button>
        <button onClick={() => data.onSelect("action")} className="bg-green-500 text-white px-2 py-1 rounded">Action</button>
      </div>
      <button onClick={data.onAdd} className="mt-2 bg-blue-500 text-white px-2 py-1 rounded">Add (+)</button>
    </div>
  );
}

export default ZapNode;
