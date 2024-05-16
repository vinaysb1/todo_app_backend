import { Request, Response } from 'express';
import * as notificationService from '../services/notificationService';

export const getNotifications = (req: Request, res: Response) => {
  const notifications = notificationService.getNotifications();
  res.send(notifications);
};

export const createNotification = (req: Request, res: Response) => {
  const newNotificationData = req.body;
  const id = notificationService.createNotification(newNotificationData);
  res.send(`Notification with id: ${id} created.`);
};

export const updateNotification = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const updatedNotificationData = req.body;
  const success = notificationService.updateNotification(id, updatedNotificationData);
  if (success) {
    res.send(`Notification with id ${id} updated.`);
  } else {
    res.status(404).send(`Notification with id ${id} not found.`);
  }
};

export const deleteNotification = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const success = notificationService.deleteNotification(id);
  if (success) {
    res.send(`Notification with id ${id} deleted.`);
  } else {
    res.status(404).send(`Notification with id ${id} not found.`);
  }
};

export const getNotificationById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const notification = notificationService.getNotificationById(id);
  if (notification) {
    res.send(notification);
  } else {
    res.status(404).send(`Notification with id ${id} not found.`);
  }
};
