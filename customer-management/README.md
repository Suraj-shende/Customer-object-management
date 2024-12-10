
# Customer Management Application

## Overview
This project enables secure customer object management.

## Project structure 

- customer-management
- │
- ├── customer-app-backend   
- │   ├── authentication           
- │   ├── customers                
- │   ├── backend                
- │   └── Dockerfile                 
- │
- ├── customer-ui-frontend 
- │   ├── src/                       
- │   ├── public/                   
- │   └── Dockerfile                 
- │
- ├── docker-compose.yml             
- ├── requirements.txt               
- ├── README.md                      
- └── .gitignore                  


## Setup
- `docker-compose up`

## Prerequisites
- Node.js: v14 
- Python: v3.8
- Docker: v20
- Docker Compose

## Project Runing
- docker-compose up --build

## Features
- JWT Authentication: Secure login and logout functionality.
- Customer Management: Create, read, update, and delete customer records.
- Error Handling: Displays user-friendly error messages for failed operations.
- Modern Technologies:
  - Frontend: React (with TypeScript)
  - Backend: Django REST Framework
  - Database: MySQL
-Dockerized Setup: Easy setup and deployment using Docker and Docker Compose.


## Future Improvements
- Add user roles and permissions.
- Implement pagination and search for customer records.
- Improve frontend UI with more advanced design components.
- Add CI/CD pipelines for automated testing and deployment.


