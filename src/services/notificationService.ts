import Notification from '../models/notificationModel';

const notifications: Notification[] = [];
let idgen = 1;

export const getNotifications = (): Notification[] => {
  return notifications;
};

export const createNotification = (newNotificationData: Notification): number => {
  const newNotification: Notification = { ...newNotificationData, id: idgen++ };
  notifications.push(newNotification);
  return newNotification.id;
};

export const updateNotification = (id: number, updatedNotificationData: Notification): boolean => {
  const index = notifications.findIndex(n => n.id === id);
  if (index !== -1) {
    notifications[index] = { ...notifications[index], ...updatedNotificationData };
    return true;
  }
  return false;
};

export const deleteNotification = (id: number): boolean => {
  const index = notifications.findIndex(n => n.id === id);
  if (index !== -1) {
    notifications.splice(index, 1);
    return true;
  }
  return false;
};

export const getNotificationById = (id: number): Notification | undefined => {
  return notifications.find(n => n.id === id);
};
