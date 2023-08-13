const { exec } = require("child_process");

module.exports.getPredictions = (req, res) => {
  exec("python predict.py", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      return res.status(500).json({ error: "An error occurred" });
    }

    try {
      const predictions = JSON.parse(stdout);
      res.json(predictions);
    } catch (parseError) {
      console.error(`Error parsing Python output: ${parseError}`);
      res.status(500).json({ error: "An error occurred" });
    }
  });
};
