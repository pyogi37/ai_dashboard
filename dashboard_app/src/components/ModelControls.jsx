import React from "react";

const ModelControls = ({ onStart, onStop, onConfigure }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Model Controls</h2>
      <div className="flex gap-2">
        <button
          className="rounded-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 active:bg-blue-700 transition-all"
          onClick={onStart}
        >
          Start Model
        </button>
        <button
          className="rounded-full bg-red-500 text-white py-2 px-4 hover:bg-red-600 active:bg-red-700 transition-all"
          onClick={onStop}
        >
          Stop Model
        </button>
        <button
          className="rounded-full bg-gray-400 text-white py-2 px-4 hover:bg-gray-500 active:bg-gray-600 transition-all"
          onClick={onConfigure}
        >
          Configure Model
        </button>
      </div>
    </div>
  );
};

export default ModelControls;
