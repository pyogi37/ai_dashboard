import React, { useState, useEffect } from "react";
import axios from "axios";
import PerformanceMetrics from "./components/PerformanceMetrics";
import DataVisualization from "./components/DataVisualization";
import ModelControls from "./components/ModelControls";
import "./index.css";

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});
  const [predictions, setPredictions] = useState([]);
  const [isModelRunning, setIsModelRunning] = useState(false);

  useEffect(() => {
    // Fetch metrics
    axios
      .get("http://localhost:8000/api/v1/metrics")
      .then((response) => setMetrics(response.data))
      .catch((error) => console.error("Error fetching metrics:", error));

    // Fetch predictions
    axios
      .get("http://localhost:8000/api/v1/predictions")
      .then((response) => setPredictions(response.data))
      .catch((error) => console.error("Error fetching predictions:", error));
  }, []);

  // Function to start the AI model
  const onStartModel = () => {
    console.log("Starting the model...");
    setIsModelRunning(true);
    axios
      .get("http://localhost:8000/api/v1/predictions")
      .then((response) => setPredictions(response.data))
      .catch((error) => console.error("Error fetching predictions:", error));

    axios
      .get("http://localhost:8000/api/v1/metrics")
      .then((response) => setMetrics(response.data))
      .catch((error) => console.error("Error fetching metrics:", error));
  };

  // Function to stop the AI model
  const onStopModel = () => {
    console.log("Stopping the model...");
    setIsModelRunning(false);
    setMetrics({});
    setPredictions([]);
  };

  // Function to configure the AI model
  const onConfigureModel = () => {
    console.log("Configuring the model...");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="bg-gray-800 p-4 mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Model Dashboard</h1>
        <ModelControls
          onStart={onStartModel}
          onStop={onStopModel}
          onConfigure={onConfigureModel}
          isModelRunning={isModelRunning}
        />
      </nav>
      <div className="container mx-auto p-4">
        <PerformanceMetrics metrics={metrics} />
        <DataVisualization predictions={predictions} />
      </div>
    </div>
  );
};

export default Dashboard;
