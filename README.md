# Assignment Management System

A modern full-stack Assignment Management application built to help users organize, track, and manage their daily tasks or assignments efficiently.

This project provides an intuitive Kanban-style interface where assignments are grouped into different stages of completion such as **TODO**, **IN PROGRESS**, and **COMPLETED**, allowing users to visualize progress in a simple and organized way.

The application combines a clean user interface with a structured backend architecture to create a scalable task management system.

---

# Project Overview

Managing assignments or tasks manually often becomes difficult when multiple activities are being handled simultaneously. Users may forget pending work, lose track of progress, or struggle to prioritize tasks.

This system solves that problem by providing:

- A centralized place to manage assignments
- Real-time tracking of assignment status
- Dashboard analytics
- Search and filtering capabilities
- Organized task categorization
- A visual Kanban board representation

Instead of maintaining handwritten notes or scattered lists, users can manage all tasks from one interface.

---

# Problem Statement

People often face challenges such as:

- Forgetting important tasks
- Losing track of assignment progress
- Difficulty organizing work
- No clear visualization of completed vs pending tasks
- Difficulty prioritizing tasks

This project aims to simplify task organization through an interactive management platform.

---

# Main Objective

The primary goal of this application is to create a system where users can:

- Create assignments
- Track assignment progress
- Modify existing tasks
- Delete unnecessary assignments
- Categorize work using statuses
- Search and filter tasks
- View overall progress statistics

---

# Features Implemented

The project currently supports the following features:

### Assignment Creation

Users can create new assignments by providing:

- Title
- Priority level
- Status

This allows users to quickly organize work based on urgency and progress.

---

### Assignment Editing

Existing assignments can be updated whenever needed.

Users can:

- Modify assignment titles
- Change priorities
- Update status

For example:

A task initially marked as:

TODO

can later be updated to:

IN_PROGRESS

and finally:

COMPLETED

---

### Assignment Deletion

Assignments no longer required can be removed.

A confirmation popup is displayed before deletion to prevent accidental removal.

---

### Dashboard Statistics

The dashboard provides a quick overview of current progress.

It displays:

- Total assignments
- Pending assignments
- Assignments in progress
- Completed assignments

These statistics update automatically whenever data changes.

This helps users instantly understand their workload.

---

### Search Functionality

Users can quickly search assignments using keywords.

Features:

- Real-time filtering
- Case-insensitive search
- Instant results

This becomes especially useful when the number of assignments grows.

---

### Status Filtering

Assignments can be filtered according to their current stage:

- All
- TODO
- IN_PROGRESS
- COMPLETED

This helps users focus only on relevant tasks.

---

### Kanban Board

One of the key features of this project is the Kanban board layout.

Assignments are visually grouped into three sections:

TODO

IN_PROGRESS

COMPLETED

Instead of displaying all tasks in a single list, the Kanban layout provides a better visualization of progress.

Users can immediately understand:

- what work is pending
- what work is ongoing
- what work has already finished

This design is inspired by popular productivity tools.

---

# User Interface Overview

The application interface currently contains:

### Top Dashboard Section

Displays statistics cards:

- Total Tasks
- TODO count
- IN_PROGRESS count
- COMPLETED count

---

### Assignment Form

Allows users to:

- Add assignments
- Edit assignments
- Select priority
- Update status

The interface automatically switches into edit mode when updating a task.

Visual indicators are provided so users clearly understand that they are modifying an existing assignment.

---

### Assignment Cards

Assignments appear as interactive cards.

Each card currently contains:

- Assignment title
- Edit action
- Delete action

Cards are grouped according to their status.

---

# Technical Architecture

The application follows a layered architecture pattern.

System flow:

```text
User Interface

↓

Controller Layer

↓

Service Layer

↓

Repository Layer

↓

Database
```

Each layer has a specific responsibility.

---

### Controller Layer

Acts as the communication entry point.

Responsibilities:

- Receives requests from frontend
- Handles API endpoints
- Sends responses back

---

### Service Layer

Contains business logic.

Responsibilities:

- Validation
- Duplicate checks
- Processing rules
- Assignment operations

Separating logic into services improves maintainability.

---

### Repository Layer

Acts as a bridge between application and database.

Responsibilities:

- Store records
- Fetch records
- Update records
- Delete records

Spring Data JPA reduces manual SQL writing.

---

### Database Layer

Stores assignment information permanently.

Data currently stored:

- Assignment ID
- Title
- Priority
- Status

---

# Technologies Used

## Backend Technologies

### Java 17

Used as the core programming language.

Provides:

- Object-oriented design
- Scalability
- strong ecosystem support

---

### Spring Boot

Used for backend application development.

Advantages:

- Simplifies application setup
- Rapid API development
- Built-in dependency management
- Production-ready architecture

---

### Spring Data JPA

Used for database operations.

Benefits:

- Reduces SQL boilerplate code
- Simplifies CRUD implementation
- Easy database interaction

---

### MySQL

Used as relational database.

Stores assignment records persistently.

---

### Maven

Dependency and build management tool.

Used to:

- manage libraries
- package application
- run project

---

# Frontend Technologies

### React

Used for building interactive user interfaces.

Benefits:

- Component-based architecture
- Reusable code
- Dynamic updates

---

### Material UI

Used for UI components.

Provides:

- Buttons
- Cards
- Forms
- Layouts
- Responsive styling

---

### Axios

Used for API communication.

Handles:

Frontend ↔ Backend data exchange

---

### React Toastify

Provides notification messages.

Examples:

- Success alerts
- Error messages
- Validation messages

---

# Current Backend APIs

The backend exposes REST APIs for assignment operations.

Available operations:

| Method | Endpoint | Purpose |
|----------|----------|----------|
| POST | /assignments | Create assignment |
| GET | /assignments | Retrieve assignments |
| GET | /assignments/{id} | Get assignment details |
| PUT | /assignments/{id} | Update assignment |
| DELETE | /assignments/{id} | Delete assignment |

---

# Current Project Structure

```text
assignment-management

Backend
    ├── Controller
    ├── Service
    ├── Repository
    ├── Model

Frontend
    ├── Components
    ├── Services
    └── App.js
```

---

# Challenges Solved During Development

During implementation several improvements were added:

✓ Duplicate assignment prevention

✓ Search optimization

✓ Kanban task grouping

✓ Confirmation dialog for delete operations

✓ Scroll to edit form functionality

✓ Dynamic dashboard calculations

✓ Better UI improvements

---

# Future Enhancements

The application is designed in a way that additional features can easily be added.

Planned improvements:

### Drag and Drop

Users will be able to move tasks between columns by dragging cards.

---

### Due Dates

Assignments can include deadlines.

---

### User Authentication

Login and registration support.

---

### JWT Security

Secure APIs with token-based authentication.

---

### Dark Mode

Alternative UI theme.

---

### Analytics Dashboard

Additional visual reports and productivity graphs.

---

### Cloud Deployment

Deployment using:

- Docker
- Render
- Railway
- Vercel

---

# Conclusion

The Assignment Management System demonstrates how modern full-stack technologies can be combined to build practical real-world applications.

The project not only implements CRUD operations but also focuses on user experience through dashboard analytics, filtering, visual organization, and scalable architecture.

It serves as a strong learning project as well as a foundation for future enterprise-level enhancements.

---

# Author
Rahaf Perween
Developed using:
Spring Boot + React + MySQL
