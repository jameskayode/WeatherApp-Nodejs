const express = require("express");
const axios = require("axios");
const app = express();
const API_KEY = process.env.API_KEY;


// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve the public folder as static files
app.use(express.static("public"));

// Render the index template with default values for weather and error
app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

// Handle the /weather route
app.get("/weather", async (req, res) => {
  // Get the city from the query parameters
  const city = req.query.city;
  
  try {
    // Fetch weather data from the OpenWeatherMap API
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`);
    
    // Extract relevant weather information from the response
    const weatherData = response.data;

    
    // Render the index template with the weather data
    res.render("index", { weather: weatherData, error: null });
  } catch (error) {
    // Handle errors (e.g., city not found)
    res.render("index", { weather: null, error: "NO CITY SELECTED YET" });
  }
});

// Start the server and listen on port 3000 or the value of the PORT environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
