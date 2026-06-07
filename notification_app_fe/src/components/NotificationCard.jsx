function NotificationCard({ notification, onView }) {
  return (
    <div
      onClick={() => onView(notification.id)}
      style={{
        border: "1px solid #ddd",
        marginBottom: "10px",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: notification.viewed ? "#f2f2f2" : "#fff7cc",
        cursor: "pointer",
      }}
    >
      <h3>{notification.title}</h3>

      <p>
        <strong>Type:</strong> {notification.type}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(notification.timestamp).toLocaleString()}
      </p>

      <p>{notification.viewed ? "Viewed" : "Unviewed"}</p>
    </div>
  );
}

export default NotificationCard;
