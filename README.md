# Assignment Management System

A modern full-stack Assignment Management application built to help users organize, track, and manage their daily tasks or assignments efficiently.

This project provides an intuitive Kanban-style interface where assignments are grouped into different stages of completion such as **TODO**, **IN PROGRESS**, and **COMPLETED**, allowing users to visualize progress in a simple and organized way.

The application combines a clean user interface with a structured backend architecture to create a scalable task management system.

---
# Application Screenshots

## Login Page
![img.png](Images/img.png)
---

## Dashboard
![img_1.png](Images/img_1.png)
![img_2.png](Images/img_2.png)
![img.png](Images/img_13.png)
![img_1.png](Images/img_12.png)
![img_2.png](Images/img_11.png)
---

## Add Assignment Dialog
![img_3.png](Images/img_3.png)
---

## Kanban Board
![img_4.png](Images/img_4.png)
![img_5.png](Images/img_5.png)
---

## Search and Filter
![img_6.png](Images/img_6.png)
![img_7.png](Images/img_7.png)
![img_8.png](Images/img_8.png)
![img_9.png](Images/img_9.png)
![img_10.png](Images/img_10.png)
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



# Understanding Authentication, Authorization and JWT Security

## Why Security Is Needed

Imagine an Assignment Management application without any security.

The application exposes APIs such as:

```http
GET    /assignments
POST   /assignments
PUT    /assignments/{id}
DELETE /assignments/{id}
```

If these APIs are publicly accessible, anyone who knows the URL can perform operations.

For example:

```text
User A creates assignments
User B modifies them
User C deletes them
```

The backend has no way to determine who is performing the action.

This creates a fundamental problem:

```text
The system does not know the identity of the user.
```

To solve this problem, authentication was introduced.

---

# What Is Authentication?

Authentication answers a very simple question:

```text
Who are you?
```

Consider entering an office building.

At the reception desk you might be asked:

```text
What is your employee ID?
What is your name?
```

The receptionist verifies your identity before allowing you to enter.

Software systems work in exactly the same way.

A user provides:

```text
Username
Password
```

The application verifies whether the credentials are correct.

Example:

```text
Username: admin
Password: admin123
```

If the credentials match the stored user information:

```text
Authentication Successful
```

Otherwise:

```text
Authentication Failed
```

Authentication only proves identity.

It does not determine permissions.

---

# What Is Authorization?

After the system knows who the user is, a second question must be answered:

```text
What is this user allowed to do?
```

This is authorization.

Consider a company.

An intern and a manager can both enter the office.

However:

```text
Intern
    Can View Documents

Manager
    Can View Documents
    Can Approve Documents
    Can Delete Documents
```

Both users are authenticated.

However, they have different permissions.

Authorization determines those permissions.

---

# The Traditional Approach: Session-Based Authentication

Historically, web applications used session-based authentication.

Example:

```text
Browser
   ↓
Login Page
   ↓
Username + Password
   ↓
Server
```

After successful login, the server creates a session.

A session is essentially:

```text
A memory record stored on the server
```

Example:

```text
Session ID = ABC123
User = admin
```

The server returns a cookie:

```text
JSESSIONID=ABC123
```

The browser automatically sends this cookie with every request.

Example:

```text
Request 1
Cookie: JSESSIONID=ABC123

Request 2
Cookie: JSESSIONID=ABC123

Request 3
Cookie: JSESSIONID=ABC123
```

The server looks up the session and identifies the user.

This approach works well for traditional server-rendered applications.

---

# Why Session Authentication Is Less Suitable for Modern Applications

Modern applications often use separate frontend and backend systems.

Example:

```text
React Frontend
       ↓
REST API
       ↓
Spring Boot Backend
```

The frontend and backend may even run on different domains.

Example:

```text
Frontend
https://app.company.com

Backend
https://api.company.com
```

Managing server-side sessions becomes more complicated.

Additionally:

```text
Every logged-in user consumes server memory
```

because the server must maintain active sessions.

A more scalable approach is required.

---

# Introduction to JWT

JWT stands for:

```text
JSON Web Token
```

Instead of storing login information on the server, information is stored inside a token.

Think of a JWT as a digitally signed identity card.

Example:

```text
Airport Security
       ↓
Passport Verified
       ↓
Boarding Pass Issued
```

After receiving the boarding pass, passengers do not repeatedly show their passport.

The boarding pass itself proves that verification already occurred.

JWT works in the same way.

---

# Login Process Using JWT

Step 1:

The user submits credentials.

```json
{
  "username": "admin",
  "password": "admin123"
}
```

Step 2:

The server verifies the credentials.

Step 3:

The server generates a JWT.

Example:

```text
eyJhbGciOiJIUzI1NiJ9...
```

Step 4:

The token is returned to the frontend.

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

Step 5:

The frontend stores the token.

Example:

```text
localStorage
sessionStorage
```

Step 6:

Every future request includes the token.

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
```

The server verifies the token and identifies the user.

No session is required.

---

# What Is Inside a JWT?

A JWT contains three sections.

```text
HEADER.PAYLOAD.SIGNATURE
```

Example:

```text
xxxxx.yyyyy.zzzzz
```

---

## Header

The header contains metadata.

Example:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Meaning:

```text
Algorithm = HS256
Type = JWT
```

---

## Payload

The payload contains user information.

Example:

```json
{
  "sub": "admin",
  "role": "ADMIN",
  "exp": 1750000000
}
```

Explanation:

```text
sub  = Subject (Username)

role = User Role

exp  = Expiration Time
```

This information allows the backend to understand who the user is.

---

## Signature

The signature is the most important part.

It prevents token tampering.

Imagine a user attempts to modify:

```json
{
  "role": "USER"
}
```

to:

```json
{
  "role": "ADMIN"
}
```

The signature immediately becomes invalid.

The backend detects the modification and rejects the token.

This ensures trust and integrity.

---

# JWT Implementation In This Project

A dedicated service named:

```java
JwtService
```

was introduced.

Responsibilities:

```text
Generate JWT Tokens
Set Expiration Time
Embed Username
Sign Token
```

Example:

```java
Jwts.builder()
    .subject(username)
    .issuedAt(new Date())
    .expiration(...)
    .signWith(key)
    .compact();
```

The generated token represents the authenticated user.

---

# DTO Layer

Authentication requests are represented using DTOs.

Example:

```java
LoginRequest
```

Purpose:

```json
{
  "username": "admin",
  "password": "admin123"
}
```

Authentication responses are represented using:

```java
LoginResponse
```

Purpose:

```json
{
  "token": "eyJhbG..."
}
```

DTOs separate API contracts from database entities.

This improves maintainability and keeps responsibilities clear.

---

# Current State of Implementation

Implemented:

✓ Spring Security Dependency

✓ Security Configuration

✓ CORS Configuration

✓ In-Memory Users

✓ JWT Dependencies

✓ JwtService

✓ LoginRequest DTO

✓ LoginResponse DTO

✓ AuthController

✓ JWT Token Generation

At the current stage, token generation is functioning successfully.

Credential validation and endpoint protection will be implemented in the next phase.

---

# Future Enhancements

The following security enhancements are planned:

1. Validate Username and Password using AuthenticationManager
2. Generate JWT only after successful authentication
3. Create JWT Validation Filter
4. Protect Assignment APIs
5. Implement Role-Based Access Control
6. Introduce ADMIN and USER roles
7. Create React Login Screen
8. Store JWT in Frontend
9. Send Bearer Token with API Requests
10. Integrate OAuth2 Concepts
11. Compare JWT Architecture with SAP XSUAA and IAS

The final architecture will closely resemble the security architecture used in modern enterprise applications and cloud-native microservices.


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
