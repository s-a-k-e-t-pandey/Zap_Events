import React from "react";
import { Handle, Position } from "@xyflow/react";

const ActionNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="p-3 border border-green-500 bg-green-100 rounded-md shadow-md">
      <strong>Action:</strong> {data.label}
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export default ActionNode;
