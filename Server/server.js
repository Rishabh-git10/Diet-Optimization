const express = require("express");
const cors = require("cors");
const { spawn } = require('child_process');


const app = express();
const port = 3001;

app.use(express.json());
app.use(cors())


// Define your routes
app.post("/submit-form", (req, res) => {
    const formData = req.body;
    const pythonProcess = spawn('python', ['./app.py', JSON.stringify(formData)]);

    // Handle the output from the Python script
    pythonProcess.stdout.on('data', (data) => {
        // Process the output data from the script
        const result = data.toString();
        // Send the result back to the client
        res.send(result);
    });

    // Handle any errors that occur during script execution
    pythonProcess.on('error', (error) => {
        // Handle the error
    });
    // Process the form data and perform any necessary operations

});


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});