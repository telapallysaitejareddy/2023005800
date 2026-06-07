import { useEffect, useState } from "react";
import NotificationList from "../components/NotificationList";
import FilterBar from "../components/FilterBar";
import { getTopNotifications } from "../services/priorityCalculator";

function PriorityInbox() {
  const [notifications, setNotifications] = useState([]);

  const [typeFilter, setTypeFilter] = useState("All");

  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Microsoft Placement Drive",
        type: "Placement",
        timestamp: "2026-06-07T09:00:00",
        viewed: false,
      },
      {
        id: 2,
        title: "Amazon Hiring Notification",
        type: "Placement",
        timestamp: "2026-06-06T11:00:00",
        viewed: false,
      },
      {
        id: 3,
        title: "Semester Results Released",
        type: "Result",
        timestamp: "2026-06-05T10:00:00",
        viewed: false,
      },
      {
        id: 4,
        title: "Technical Workshop",
        type: "Event",
        timestamp: "2026-06-04T15:00:00",
        viewed: false,
      },
      {
        id: 5,
        title: "Google Internship Drive",
        type: "Placement",
        timestamp: "2026-06-03T09:00:00",
        viewed: false,
      },
      {
        id: 6,
        title: "Hackathon Announcement",
        type: "Event",
        timestamp: "2026-06-02T12:00:00",
        viewed: false,
      },
      {
        id: 7,
        title: "Mid Examination Results",
        type: "Result",
        timestamp: "2026-06-01T10:00:00",
        viewed: false,
      },
    ];

    setNotifications(data);
  }, []);

  let topNotifications = getTopNotifications(notifications, limit);

  if (typeFilter !== "All") {
    topNotifications = topNotifications.filter(
      (notification) => notification.type === typeFilter,
    );
  }

  return (
    <div>
      <h2 className="page-title">Priority Inbox</h2>

      <FilterBar
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        limit={limit}
        setLimit={setLimit}
      />

      <NotificationList notifications={topNotifications} onView={() => {}} />
    </div>
  );
}

export default PriorityInbox;
