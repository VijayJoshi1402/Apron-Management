# ✈️ Apron Management System

## Overview

The Apron Management System is a full-stack web application developed using **Angular**, **NestJS**, and **PostgreSQL**. The application helps manage airport flight plans, stand assignments, and provides an operational dashboard for airport apron management.

The application provides the following features:

- Dashboard with live statistics
- Flight Plan Management
- Search Flights
- Filter Flights
- View Linked Flights
- Stand Assignment
- Stand Occupancy Validation
- Assignment History

---

# Technology Stack

## Frontend

- Angular 21
- TypeScript
- Tailwind CSS
- Angular Signals
- Standalone Components

## Backend

- NestJS
- TypeORM
- PostgreSQL

## Database

- PostgreSQL (Running inside Docker)

---

# Project Structure

```
Apron-Management
│
├── frontend
│   ├── src
│   └── ...
│
├── backend
│   ├── src
│   └── ...
│
└── README.md
```

---

# Prerequisites

Before running the project, ensure the following software is installed:

- Node.js (v20 or above recommended)
- Angular -(V21)
- npm
- Docker Desktop
- Git

---

# Quick Start

Follow these steps in order:

1. Start Docker Desktop.
2. Start the PostgreSQL Docker container.
3. Configure the backend `.env` file.
4. Start the NestJS backend.
5. Seed the database.
6. Start the Angular frontend.
7. Open the application in your browser.

---
# First Start the Docker Engine and Run the command
docker compose up -d

# Start PostgreSQL using Docker

Ensure Docker Desktop is running.

Check available containers:

```bash
docker ps -a
```



# Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file inside the backend directory.

Example:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=apron_management
```

Start the backend server.

```bash
npm run start:dev
```

Backend will start on:

```
http://localhost:3000
```

---
# Frontend Setup

Navigate to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start Angular.

```bash
ng serve
```

Frontend runs on:

```
http://localhost:4200
```

Open your browser:

```
http://localhost:4200
```

---

# Available API Endpoints

## Dashboard

```
GET /dashboard
```

Returns dashboard statistics.

---

## Flight Plans

```
GET /flight-plans
```

Returns all flight plans.

Supports:

- Search
- Flight Type Filter
- Date Filter

Example:

```
GET /flight-plans?search=EY
```

---

## Flight Details

```
GET /flight-plans/{id}
```

Returns details of a flight.

---

## Linked Flights

```
GET /flight-plans/{id}/linked
```

Returns linked flights.

---

## Stands

```
GET /stands
```

Returns all airport stands.

---

## Stand Assignments

```
GET /stand-assignments
```

Returns assignment history.

---

Create Assignment

```
POST /stand-assignments
```

---

Seed Database

```
POST /seed
```

---

# Application Features

### Dashboard

- Total Flights
- Arrival Flights
- Departure Flights
- Available Stands

---

### Flight Plans

- Search Flights
- Filter by Flight Type
- Filter by Date
- View Linked Flights

---

### Stand Assignment

- Assign Stand to Flight
- Prevent Stand Conflicts
- View Assignment History

---

# Stand Conflict Validation

Before assigning a stand, the backend checks whether the selected stand is already occupied during the requested time period.

If a conflict exists, the API returns:

```
Stand is already occupied during this time.
```

---

# Application Architecture

The application follows a layered architecture.

```
Angular Component
        │
Angular Service
        │
API Service
        │
HTTP Request
        │
NestJS Controller
        │
NestJS Service
        │
TypeORM Repository
        │
PostgreSQL
```

The response travels back through the same layers to update the UI.

---

# Build Commands

## Backend

```bash
npm run build
```

## Frontend

```bash
ng build
```

---

# Notes

- PostgreSQL is hosted locally using Docker.
- TypeORM uses `synchronize: true` for development.
- Sample data is imported using the `/seed` endpoint.
- CORS is enabled for local development.
- The application follows a feature-based modular architecture.

---

# Author

**Vijay Joshi**

Software UI Developer

Angular | NestJS | PostgreSQL | TypeScript