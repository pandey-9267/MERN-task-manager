Task Manager (MERN Stack)
Project Description


<img width="1919" height="865" alt="Screenshot 2026-04-20 132738" src="https://github.com/user-attachments/assets/41e6795d-0000-42cd-bee3-1b5de3531a2b" />

Task Manager is a simple full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It allows users to create, view, update, delete, and filter tasks based on their completion status.

The project demonstrates CRUD operations, REST API integration, responsive UI design, and clean project structure.

Features
Add new tasks
View all tasks
Update task status (Pending / Completed)
Delete tasks
Filter tasks (All / Pending / Completed)
Description limit (200 characters)
Form validation (empty fields not allowed)
Responsive design (mobile friendly)
Clean and modern UI
No task message when list is empty
Tech Stack

Frontend:

React.js
CSS

Backend:

Node.js
Express.js

Database:

MongoDB
Mongoose

API:

REST API (GET, POST, PUT, DELETE)
Folder Structure
MERN-task-manager
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md

API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
Installation & Setup
1. Clone repository
git clone <repository-link>
cd project-folder
2. Backend setup
cd backend
npm install
node server.js

Server runs on:

http://localhost:5000
3. Frontend setup
cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000
Database Configuration

Local MongoDB connection:

mongodb://127.0.0.1:27017/taskdb

Make sure MongoDB service is running.

Usage
Enter task title
Enter description (max 200 characters)
Click Add Task
Update task status using Toggle Status
Delete task if needed
Filter tasks using All, Pending, Completed buttons
Example Task

Title:

Update GitHub

Description:

Push the MERN Task Manager project to GitHub with proper README, project structure, and commit messages.
Best Practices Used
Clean folder structure
Separate models, routes, controllers
REST API integration
React functional components with hooks
Form validation
Responsive UI design
Meaningful variable names
Expected Output
Fully working MERN CRUD application
Clean UI
API connected with frontend
GitHub repository with proper structure
Author

Abhishek Pandey
B.Tech CSE Student
