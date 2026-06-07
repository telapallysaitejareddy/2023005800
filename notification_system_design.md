# Notification Priority System Design

## Objective

The system manages campus notifications and displays the most important notifications to users based on priority and recency.

---

## Notification Types

Priority order:

1. Placement
2. Result
3. Event

Weights:

- Placement = 3
- Result = 2
- Event = 1

---

## Priority Formula

Priority Score:

priority =
(typeWeight \* 1000000000) + timestamp

This ensures that notification type has higher importance while newer notifications are ranked above older notifications of the same type.

---

## Top N Notifications

The system supports displaying Top N notifications where N can be:

- 10
- 15
- 20

Users can select the required limit through the UI.

---

## Efficient Ranking Strategy

Instead of sorting the entire notification list repeatedly, a Min Heap of size N can be maintained.

Algorithm:

1. Calculate priority score.
2. Insert notification into heap.
3. If heap size exceeds N:
   - Remove smallest priority notification.
4. Maintain heap property.

Complexity:

- Insert: O(log N)
- Remove: O(log N)
- Memory: O(N)

---

## Frontend Features

- All Notifications Page
- Priority Inbox Page
- Notification Filtering
- Viewed/Unviewed Tracking
- Local Storage Support
- Responsive Design
- Logging Middleware Integration

---

## Logging

All major actions are logged through middleware:

- Notification Fetch
- Notification View
- Priority Inbox Access
- Filter Changes
- Error Handling

---

## Future Improvements

- Real API Integration
- WebSocket Notifications
- Push Notifications
- User Authentication
- Notification Search
- Pagination
