const express = require('express');
const serverless = require('serverless-http');

const api = express();
const router = express.Router(); // Use express.Router() instead of Router
const fs = require('fs'); // Import the fs module
// const { exec } = require('child_process');
// const { stderr } = require('process');
const path = require('path'); // Import the path module
const { spawn } = require('child_process');
router.get("/hello", (req, res) => res.json("Hello World!"));
router.get('/return-predictions', (req, res) => {
  console.log('Starting script execution...');


  const filePath = path.resolve(__dirname, '../../../airsenal/scripts_to_work/output_predictions.log');
  const bashFilePath = path.join(__dirname, '../../airsenal/scripts_to_work/output_predictions.log');
  console.log('Resolved Path:', bashFilePath);
  const childProcess = spawn(bashFilePath, [/* optional arguments */]);
  childProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  childProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  childProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  // // Read the contents of the output file
  // fs.readFile(filePath, 'utf8', (readError, data) => {
  //   if (readError) {
  //     console.error(`Error reading output file: ${readError}`);
  //     return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
  //   }


    // Return the output in the response
  //   res.json({ message: 'Script executed successfully', output: data });
  // });
});

api.use("/api/", router);

exports.handler = serverless(api);
