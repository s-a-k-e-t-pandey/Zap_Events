import React from "react";
import { Handle, Position } from "@xyflow/react";

const TriggerNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="p-3 border border-blue-500 bg-blue-100 rounded-md shadow-md">
      <strong>Trigger:</strong> {data.label}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default TriggerNode;
