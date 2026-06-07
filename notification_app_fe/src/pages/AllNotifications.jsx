import { useEffect, useState } from "react";
import NotificationList from "../components/NotificationList";
import FilterBar from "../components/FilterBar";
import { Log } from "../middleware/logger";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState("All");
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    Log("frontend", "info", "page", "All Notifications page loaded");

    const sampleNotifications = [
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

    const viewed =
      JSON.parse(localStorage.getItem("viewedNotifications")) || [];

    const preparedData = sampleNotifications.map((notification) => ({
      ...notification,
      viewed: viewed.includes(notification.id),
    }));

    setNotifications(preparedData);
    setLoading(false);

    Log("frontend", "info", "api", "Notifications loaded");
  }, []);

  useEffect(() => {
    let data = [...notifications];

    if (typeFilter !== "All") {
      data = data.filter((item) => item.type === typeFilter);
    }

    setFilteredNotifications(data.slice(0, limit));
  }, [notifications, typeFilter, limit]);

  const handleView = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id
        ? {
            ...notification,
            viewed: true,
          }
        : notification,
    );

    setNotifications(updatedNotifications);

    const viewed =
      JSON.parse(localStorage.getItem("viewedNotifications")) || [];

    if (!viewed.includes(id)) {
      viewed.push(id);

      localStorage.setItem("viewedNotifications", JSON.stringify(viewed));
    }

    Log("frontend", "info", "component", `Notification ${id} viewed`);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>All Notifications</h2>

      <FilterBar
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        limit={limit}
        setLimit={setLimit}
      />

      <NotificationList
        notifications={filteredNotifications}
        onView={handleView}
      />
    </div>
  );
}

export default AllNotifications;
