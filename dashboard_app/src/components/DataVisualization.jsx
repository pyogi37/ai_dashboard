import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import Table from "react-bootstrap/Table";

const DataVisualization = ({ predictions }) => {
  return (
    <div className="bg-gray-800 p-4 shadow rounded mt-8">
      <h2 className="text-lg font-semibold mb-2 text-center">
        Data Visualization
      </h2>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-md">
          <LineChart
            width={800}
            height={400}
            data={predictions}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Line type="monotone" dataKey="predicted_price" stroke="#8884d8" />
            <Line type="monotone" dataKey="actual_price" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="input_data" />
            <YAxis />
            <Tooltip />
          </LineChart>

          <Table responsive className="mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-600">
                <th className="py-2 px-4 text-center text-white">Input Data</th>
                <th className="py-2 px-4 text-center text-white">Predicted</th>
                <th className="py-2 px-4 text-center text-white">Actual</th>
                <th className="py-2 px-4 text-center text-white">Difference</th>
              </tr>
            </thead>
            <tbody>
              {predictions.map((prediction, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4 text-center">
                    {prediction.input_data}
                  </td>
                  <td className="py-2 px-4 text-center">
                    {prediction.predicted_price}
                  </td>
                  <td className="py-2 px-4 text-center">
                    {prediction.actual_price}
                  </td>
                  <td className="py-2 px-4 text-center">
                    {prediction.actual_price - prediction.predicted_price}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
