# Campus Notification Management System

## Roll Number

**2023005800**

## Project Overview

This project is a Campus Notification Management System developed using React. It provides a centralized platform for managing and prioritizing notifications such as Placement Drives, Results, and Events.

The system implements a priority-based notification ranking mechanism, viewed/unviewed tracking, filtering, and reusable logging middleware integration.

---

## Features

- View all notifications
- Priority Inbox for top notifications
- Notification filtering by type
- Configurable notification limit
- Viewed / Unviewed tracking using Local Storage
- Priority calculation based on notification type and recency
- Reusable logging middleware
- Responsive user interface

---

## Notification Priority Logic

Priority Order:

1. Placement
2. Result
3. Event

Notifications are ranked using:

- Notification Type Weight
- Timestamp Recency

Higher priority notifications appear first in the Priority Inbox.

---

## Project Structure

```text
2023005800/
│
├── logging_middleware/
│
├── notification_app_fe/
│
├── notification_app_be/
│
├── notification_system_design.md
│
└── README.md
```

## Technologies Used

- React
- JavaScript
- Vite
- Axios
- CSS
- Local Storage

---

## Logging Middleware

The project includes a reusable logging middleware that:

- Validates log requests
- Sends logs to the evaluation logging API
- Supports different log levels
- Centralizes application logging

Example:

```javascript
Log("frontend", "info", "page", "Priority Inbox page loaded");
```

---

## Screens Implemented

### All Notifications

- View notifications
- Filter by type
- Mark notifications as viewed

### Priority Inbox

- Displays top priority notifications
- Sorted using ranking algorithm

---

## Design Document

Detailed system design is available in:

```text
notification_system_design.md
```

---

## Author

**Sai Teja Reddy**  
Roll Number: **2023005800**
