const notificationWeights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const calculatePriority = (notification) => {
  const weight = notificationWeights[notification.type] || 0;

  const timestamp = new Date(notification.timestamp).getTime();

  return weight * 1000000000 + timestamp;
};

export const getTopNotifications = (notifications, limit = 10) => {
  return [...notifications]
    .sort((a, b) => calculatePriority(b) - calculatePriority(a))
    .slice(0, limit);
};
