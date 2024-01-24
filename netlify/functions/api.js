import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = express.Router()
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

export const handler = serverless(api);

// // netlify/functions/api.js

// const express = require('express');
// const serverless = require('serverless-http');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const { exec } = require('child_process');
// const fs = require('fs');

// const app = express();
// const router = express.Router();

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Execute the shell script
// router.post('/run-script', (req, res) => {
//   console.log('Starting script execution...');
//   exec('./airsenal_run_prediction.sh 3705355', (error, stdout, stderr) => {
//     console.log('Script execution completed.');

//     if (error) {
//       console.log(`Error: ${error} : ${stdout}`);
//       return res.status(500).json({ error: 'Script execution failed' });
//     }

//     // Read the contents of the output file
//     fs.readFile('output_predictions.log', 'utf8', (readError, data) => {
//       if (readError) {
//         console.error(`Error reading output file: ${readError}`);
//         return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//       }

//       // Return the output in the response
//       res.json({ message: 'Script executed successfully', output: data });
//     });
//   });
// });

// // Return predictions only 
// router.post('/return-predictions', (req, res) => {
//   console.log('Starting script execution...');

//   // Read the contents of the output file
//   fs.readFile('output_predictions.log', 'utf8', (readError, data) => {
//     if (readError) {
//       console.error(`Error reading output file: ${readError}`);
//       return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//     }

//     // Return the output in the response
//     res.json({ message: 'Script executed successfully', output: data });
//   });
// });

// // Run optimization
// router.post('/run-optimization', (req, res) => {
//   console.log(req.body, 'hi');
//   const id = req.body.fplId;
//   const email = req.body.login;
//   const password = req.body.password;

//   // Execute the first script to set variables
//   exec(`./airsenal_set_variables.sh ${password} ${email} ${id}`, (error, stdout, stderr) => { 
//     console.log('hey im here');
//     if (error) {
//       console.log('hi 4', );
//       console.error(`Error: ${error} : ${stdout}`);
//       fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
//         if (readError) {
//           console.error(`Error reading output file: ${readError}`);
//           return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//         }
//         console.log(`Script output: ${stdout}`);
      
//         // Return the output in the response
//         return res.json({ message: 'Script executed successfully', output: data });
//       });
//     }

//     console.log('Variables set successfully');
//     // Read the contents of the output file
//     fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
//       if (readError) {
//         console.error(`Error reading output file: ${readError}`);
//         return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//       }
//       console.log(`Script output: ${stdout}`);

//       // Return the output in the response
//       res.json({ message: 'Script executed successfully', output: data });
//     });
//   });
// });

// // Return optimization
// router.post('/return-optimization', (req, res) => {
//   console.log('req', req.body);

//   // Read the contents of the output file
//   fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
//     if (readError) {
//       console.error(`Error reading output file: ${readError}`);
//       return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//     }
//     console.log('Completed reading of file');

//     // Return the output in the response
//     res.json({ message: 'Script executed successfully', output: data });
//   });
// });

// app.use('/api', router);

// module.exports.handler = serverless(app);

// end of second iteration


// // functions/express.js

// const express = require('express');
// const { spawn } = require('child_process');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post('/run-script', (req, res) => {
//   console.log('Starting script execution...');

//   // Execute the shell script
//   exec('./airsenal_run_prediction.sh 3705355', (error, stdout, stderr) => {
//     console.log('Script execution completed.');

//     if (error) {
//       console.log(`Error: ${error} : ${stdout}`);
//       return res.status(500).json({ error: 'Script execution failed' });
//     }

//     // Read the contents of the output file
//     fs.readFile('output_predictions.log', 'utf8', (readError, data) => {
//       if (readError) {
//         console.error(`Error reading output file: ${readError}`);
//         return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//       }

//       // Return the output in the response
//       res.json({ message: 'Script executed successfully', output: data });
//     });
//   });
// });

// // return predictions only 
// app.post('/return-predictions' , (req, res) => {

//   console.log('Starting script execution...');



//     // Read the contents of the output file
//     fs.readFile('output_predictions.log', 'utf8', (readError, data) => {
//       if (readError) {
//         console.error(`Error reading output file: ${readError}`);
//         return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//       }

//       // Return the output in the response
//       res.json({ message: 'Script executed successfully', output: data });
//     });
//   });

// // run optimization
// app.post('/run-optimization', (req, res) => {
// console.log(req.body, 'hi')
// const id = req.body.fplId
// // const id = "3705355"
// const email = req.body.login
// // const email = "oliverlewis1331@gmail.com"
// const password = req.body.password
// // const password = "Flynn@1992"
// // const id = "9884044"
// // const email = "olilewis1@hotmail.co.uk"
// // const password = "Flynn@2020"
//       // Execute the first script to set variables
// exec(`./airsenal_set_variables.sh ${password} ${email} ${id}`, (error, stdout, stderr) => { 
//   console.log('hey im here')
//   if (error) {
//     console.log('hi 4', );
//     console.error(`Error: ${error} : ${stdout}`);
//     fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
//       if (readError) {
//         console.error(`Error reading output file: ${readError}`);
//         return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//       }
//       console.log(`Script output: ${stdout}`);
    
//       // Return the output in the response
//       return res.json({ message: 'Script executed successfully', output: data });
//     });;
//   }

//   console.log('Variables set successfully');
//  // Read the contents of the output file
//  fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
//   if (readError) {
//     console.error(`Error reading output file: ${readError}`);
//     return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//   }
//   console.log(`Script output: ${stdout}`);

//   // Return the output in the response
//   res.json({ message: 'Script executed successfully', output: data });
// }) });
//   //  // Execute the shell script with the id parameter
//   // exec(`./airsenal_run_optimization.sh  ${id}`, (error, stdout, stderr) => {
//   //   console.log('hi 2', error, stdout, stderr);
//   //   if (error) {
//   //     console.log('hi 4', );
//   //     console.error(`Error: ${error} : ${stdout}`);
//   //     return res.status(500).json({ error: 'Script execution failed' });
//   //   }



//   //   // Read the contents of the output file
//   //   fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
//   //     if (readError) {
//   //       console.error(`Error reading output file: ${readError}`);
//   //       return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//   //     }
//   //     console.log(`Script output: ${stdout}`);

//   //     // Return the output in the response
//   //     res.json({ message: 'Script executed successfully', output: data });
//   //   });
//   // });
// });

// // run optimization
// app.post('/return-optimization', (req, res) => {
//   console.log('req', req.body)
  
//       // Read the contents of the output file
//       fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
//         if (readError) {
//           console.error(`Error reading output file: ${readError}`);
//           return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
//         }
//        console.log('Completed reading of file')
  
//         // Return the output in the response
//         res.json({ message: 'Script executed successfully', output: data });
//       });
//     });

// module.exports.handler = async (event, context) => {
//   const { path, httpMethod, body } = event;
//   const req = {
//     path,
//     httpMethod,
//     body: JSON.parse(body),
//   };
//   const res = {
//     status: (code) => ({
//       send: (message) => ({
//         statusCode: code,
//         body: JSON.stringify({ message }),
//       }),
//     }),
//     json: (data) => ({
//       statusCode: 200,
//       body: JSON.stringify(data),
//     }),
//   };

//   await app(req, res);

//   return res;
// };
