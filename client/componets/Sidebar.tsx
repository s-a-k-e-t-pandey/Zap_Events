"use client";
import { X } from "lucide-react"; // Close Icon
import { motion } from "framer-motion";

export const Sidebar = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      className="border border-black fixed top-17 left-0 h-full w-64 bg-slate-400 text-white shadow-lg p-4"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
    >
      <button onClick={onClose} className="text-black bg-amber-700 border rounded">
        <X size={24} />
      </button>
      <ul className="mt-4 space-y-2">
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </motion.div>
  );
};
