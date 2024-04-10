---

# Weather App

Welcome to the Weather App repository! This project is a simple web application built with Node.js, Express.js, EJS, and the OpenWeatherMap API. It allows users to get current weather information for a specific city by making requests to the OpenWeatherMap API.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)

## About

The Weather App is a basic web application designed to provide users with current weather data for a given city. Users can input the name of a city, and the application fetches weather information from the OpenWeatherMap API and displays it on the screen.

## Features

- **City Input:** Users can input the name of a city to retrieve weather information.
- **Current Weather Data:** The application displays current temperature, wind speed, humidity, and pressure for the specified city.
- **Error Handling:** Handles errors gracefully, displaying appropriate messages if the city is not found or if there's an issue with fetching weather data.
- **Responsive Design:** The application is designed to be responsive and accessible across various devices and screen sizes.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime environment.
- **Express.js:** Web application framework for Node.js used for handling HTTP requests.
- **EJS (Embedded JavaScript):** Templating engine for generating dynamic HTML content.
- **OpenWeatherMap API:** External API used to fetch current weather data.
- **Axios:** Promise-based HTTP client for making requests to the OpenWeatherMap API.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```
   API_KEY=your_openweathermap_api_key
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access the Weather App.

## Usage

To use the Weather App, follow these steps:

1. Enter the name of a city in the input field on the homepage.
2. Click on the "Get Weather" button to retrieve weather information for the specified city.
3. The current weather data for the city will be displayed on the screen.


---

Feel free to modify this template as needed to provide more information about your Weather App project or to include any additional features or details.
