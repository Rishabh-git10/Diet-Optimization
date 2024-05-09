const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World!");
})


// Define your routes
app.post("/submit-form", async (req, res) => {
    const formData = req.body;
    console.log(formData);
    const variables = ["broccoli", "asparagus", "potatoes", "chicken", "fish"];

    const objective_coeffs = [10, 15, 18, 30, 40];
    const constraints = [
        {
            coefficients: [34, 20, 77, 165, 206],
            rhs: formData.calories,
            type: "ge"
        },
        {
            coefficients: [2.8, 2.2, 2, 31, 22],
            rhs: formData.protein,
            type: "ge"
        },
        {
            coefficients: [0.4, 0.2, 0.1, 3.6, 13],
            rhs: formData.fat,
            type: "ge"
        },
        {
            coefficients: [316, 202, 429, 318, 363],
            rhs: formData.potassium,
            type: "ge"
        }
    ];

    // Create the final data object
    const data = {
        variables,
        objective_coeffs,
        constraints
    };
    console.log(JSON.stringify(data))
    try {
        const response = await axios.post('http://localhost:5000/optimize', data);
        const result = response.data;
        res.json(result);
    } catch (error) {
        // Handle error
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }


});


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});