function NotificationCard({ notification, onView }) {
  return (
    <div
      className={`notification-card ${
        notification.viewed ? "viewed" : "unviewed"
      }`}
      onClick={() => onView(notification.id)}
      style={{
        cursor: "pointer",
      }}
    >
      <div className="notification-title">{notification.title}</div>

      <div className="notification-type">Type: {notification.type}</div>

      <div className="notification-date">
        {new Date(notification.timestamp).toLocaleString()}
      </div>
    </div>
  );
}

export default NotificationCard;
