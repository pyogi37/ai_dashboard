module.exports.getMetrics = (req, res) => {
  const metrics = {
    accuracy: 0.85,
    precision: 0.76,
    recall: 0.89,
  };
  res.json(metrics);
};
