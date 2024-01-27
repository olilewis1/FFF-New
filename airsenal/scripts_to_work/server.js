const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs'); // Import the fs module
const app = express();
const PORT = process.env.PORT || 3000;
const { exec } = require('child_process');
const { stderr } = require('process');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});


// execute predictions
app.post('/run-script', (req, res) => {
  console.log('Starting script execution...');

  // Execute the shell script
  exec('./airsenal_run_prediction.sh 3705355', (error, stdout, stderr) => {
    console.log('Script execution completed.');

    if (error) {
      console.log(`Error: ${error} : ${stdout}`);
      return res.status(500).json({ error: 'Script execution failed' });
    }

    // Read the contents of the output file
    fs.readFile('output_predictions.log', 'utf8', (readError, data) => {
      if (readError) {
        console.error(`Error reading output file: ${readError}`);
        return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
      }

      // Return the output in the response
      res.json({ message: 'Script executed successfully', output: data });
    });
  });
});

// return predictions only 
app.post('/return-predictions' , (req, res) => {

  console.log('Starting script execution...');



    // Read the contents of the output file
    fs.readFile('output_predictions.log', 'utf8', (readError, data) => {
      if (readError) {
        console.error(`Error reading output file: ${readError}`);
        return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
      }

      // Return the output in the response
      res.json({ message: 'Script executed successfully', output: data });
    });
  });

// run optimization
app.post('/run-optimization', (req, res) => {
console.log(req.body, 'hi')
const id = req.body.fplId
// const id = "3705355"
const email = req.body.login
// const email = "oliverlewis1331@gmail.com"
const password = req.body.password
// const password = "Flynn@1992"
// const id = "9884044"
// const email = "olilewis1@hotmail.co.uk"
// const password = "Flynn@2020"
      // Execute the first script to set variables
exec(`./airsenal_set_variables.sh ${password} ${email} ${id}`, (error, stdout, stderr) => { 
  console.log('hey im here')
  if (error) {
    console.log('hi 4', );
    console.error(`Error: ${error} : ${stdout}`);
    fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
      if (readError) {
        console.error(`Error reading output file: ${readError}`);
        return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
      }
      console.log(`Script output: ${stdout}`);
    
      // Return the output in the response
      return res.json({ message: 'Script executed successfully', output: data });
    });;
  }

  console.log('Variables set successfully');
 // Read the contents of the output file
 fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
  if (readError) {
    console.error(`Error reading output file: ${readError}`);
    return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
  }
  console.log(`Script output: ${stdout}`);

  // Return the output in the response
  res.json({ message: 'Script executed successfully', output: data });
}) });
  //  // Execute the shell script with the id parameter
  // exec(`./airsenal_run_optimization.sh  ${id}`, (error, stdout, stderr) => {
  //   console.log('hi 2', error, stdout, stderr);
  //   if (error) {
  //     console.log('hi 4', );
  //     console.error(`Error: ${error} : ${stdout}`);
  //     return res.status(500).json({ error: 'Script execution failed' });
  //   }



  //   // Read the contents of the output file
  //   fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
  //     if (readError) {
  //       console.error(`Error reading output file: ${readError}`);
  //       return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
  //     }
  //     console.log(`Script output: ${stdout}`);

  //     // Return the output in the response
  //     res.json({ message: 'Script executed successfully', output: data });
  //   });
  // });
});

// run optimization
app.post('/return-optimization', (req, res) => {
  console.log('req', req.body)
  
      // Read the contents of the output file
      fs.readFile('output_optimization.log', 'utf8', (readError, data) => {
        if (readError) {
          console.error(`Error reading output file: ${readError}`);
          return res.status(500).json({ error: 'Script execution succeeded, but failed to read output' });
        }
       console.log('Completed reading of file')
  
        // Return the output in the response
        res.json({ message: 'Script executed successfully', output: data });
      });
    });
app.listen(PORT, () => { 
  console.log('Server is running on port 3000');
});
