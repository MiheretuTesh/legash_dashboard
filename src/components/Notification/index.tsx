import React, { useState, useEffect } from "react";

interface Notification {
  _id: string;
  message: string;
}

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  console.log(notifications, "notifications notifications notifications");

  useEffect(() => {
    const eventSource = new EventSource(
      "https://legashfund.onrender.com/api/v1/notifications"
    ); // SSE route

    eventSource.onmessage = (event) => {
      const newNotification: Notification = JSON.parse(event.data);
      setNotifications((prevNotifications) => [
        newNotification,
        ...prevNotifications,
      ]);
    };

    return () => {
      eventSource.close(); // Clean up the event source on component unmount
    };
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id} style={{ color: "black" }}>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
