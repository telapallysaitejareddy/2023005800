import axios from "axios";
import { Log } from "../middleware/logger";

export async function fetchNotifications() {
  try {
    await Log("frontend", "info", "api", "Fetching notifications");

    const notifications = [
      {
        id: 1,
        title: "Microsoft Placement Drive",
        type: "Placement",
        timestamp: "2026-06-07T09:00:00",
      },
      {
        id: 2,
        title: "Amazon Hiring Notification",
        type: "Placement",
        timestamp: "2026-06-06T11:00:00",
      },
      {
        id: 3,
        title: "Semester Results Released",
        type: "Result",
        timestamp: "2026-06-05T10:00:00",
      },
      {
        id: 4,
        title: "Technical Workshop",
        type: "Event",
        timestamp: "2026-06-04T15:00:00",
      },
    ];

    await Log("frontend", "info", "api", "Notifications fetched successfully");

    return notifications;
  } catch (error) {
    await Log("frontend", "error", "api", "Failed to fetch notifications");

    return [];
  }
}
