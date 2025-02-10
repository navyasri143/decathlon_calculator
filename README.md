# Decathlon Score Calculator

A dynamic web application to calculate decathlon scores for athletes based on their performance in ten events. This project implements official decathlon scoring algorithms and provides an intuitive, responsive user interface for data entry and results.

## Features

- Athlete Management: Add, view, and manage athlete details.
- Real-time Scoring: Automatically calculates scores for each event and total score based on official decathlon rules.
- Responsive Design: Optimized for desktop and mobile views.
- Error Handling: Displays meaningful error messages for invalid inputs.

## Live Demo

- Frontend: [View the application on Netlify](https://glistening-sundae-cb3dc2.netlify.app/)
- Backend: [API Documentation on Render](https://decalthon.onrender.com)

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your system.
- A backend server running to handle API requests (example: http://localhost:5000/api/athletes).

### Steps to Run Locally

1. Clone the Repository:
    ```bash
   git clone https://github.com/suryaprakash08100/Decalthon.git
   cd Decathlon
   ```
2.Set Up the Backend:
 ```bash
   cd backend
   node server.js
   ```
3.Set Up the Frontend:
 ```bash
   cd frontend
   npm install
   ```
4.To start the Application:
 ```bash
   npm start
   ```
The app will be available at http://localhost:3000.
### Key Features
Accurate Event Scoring: Implements the decathlon scoring formulas for all ten events.
Interactive Form: Simple and clean interface for entering athlete performance metrics.
Real-Time Feedback: Instant score calculations and updates.
Responsive Layout: Ensures a seamless experience on devices of all sizes.
Smooth Animations: Cards and forms transition elegantly.

## Screenshots

### 1. Home Screen
![Home Screen](ss1.jpg)

### 2. Adding an Athlete
![Add Athlete Form](ss2.png)

### 3. Score Card
![Score Card](ss3.png)

### 4. Score Card
![Score Card](ss4.png)

## Demo Video

[Watch the Demo Video](https://vimeo.com/1055210581/8fba7b69b4?share=copy)


## Technologies Used
Frontend: React, CSS (with responsive design principles).
Backend: Node.js (API server for handling athlete data).
Libraries:
Axios: For API requests.
React Hooks: State management.

## Future Enhancements
User Authentication: Secure login and personalized athlete tracking.
Export Functionality: Download results as PDF or Excel.
Performance Analytics: Provide insights and trends for athletes over times.

## Contact
Email: prakash.komati@sasi.ac.in
LinkedIn: Your LinkedIn Profile
