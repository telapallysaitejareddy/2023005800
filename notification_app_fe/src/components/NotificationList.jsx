import NotificationCard from "./NotificationCard";

function NotificationList({ notifications, onView }) {
  return (
    <>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onView={onView}
        />
      ))}
    </>
  );
}

export default NotificationList;
