<div align="center">
  <h1>Bike Rental Management System</h1>
  <p>A comprehensive system to manage bike rentals, including user authentication, bike management, and rental tracking.</p>
</div>

---

## Table of Contents

1. [Introduction](#introduction)
2. [Project Description](#project-description)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Installation Guideline](#installation-guideline)
   - [Prerequisites](#prerequisites)
   - [Installation Steps](#installation-steps)
   - [Configuration](#configuration)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
   - [User Routes](#user-routes)
   - [Bike Routes](#bike-routes)
   - [Rental Routes](#rental-routes)
8. [Bonus Part](#bonus-part)
   - [Middleware and Error Handling](#middleware-and-error-handling)
9. [Authentication Middleware](#authentication-middleware)
10. [Zod Validation](#zod-validation)
11. [Links](#links)

---

## Introduction

The Bike Rental Management System is designed to simplify the process of renting bikes, managing inventory, and tracking rentals. It includes user authentication, bike management, and rental tracking features.

## Project Description

This project is a full-stack application that allows users to rent bikes from a managed inventory. It includes user authentication to ensure that only registered users can rent bikes. Administrators can manage the bike inventory, track active rentals, and handle returns efficiently.

## Features

- **User Authentication**: Secure registration and login for users.
- **Bike Management**: Add, update, and delete bikes in the inventory.
- **Rental Management**: Track active rentals, manage returns, and view rental history.
- **Responsive Design**: A user-friendly interface that works seamlessly across various devices.

## Technology Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Additional**: JWT for authentication, Zod for validation

## Installation Guideline

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/bike-rental-management-system.git
   cd bike-rental-management-system
Install Backend Dependencies
```
```bash
Copy code
npm install
Install Frontend Dependencies
```
```bash
Copy code
cd client
npm install
cd ..
Configuration

Create a .env file in the root directory with the following environment variables:
env
Copy code
PORT=3000
DB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
Start the MongoDB Server

bash
Copy code
mongod
Run the Application

Backend: In the root directory, start the server:
bash
Copy code
npm start
Frontend: In the client directory, start the React app:
bash
Copy code
cd client
npm start
```