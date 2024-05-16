import { Request, Response } from 'express';
import * as notificationService from '../services/notificationService';

export const getNotifications = async (req: Request, res: Response) => {
    try {
      const notifications = await notificationService.getNotifications();
      res.send(notifications);
    } catch (error: any) {
      res.status(500).send(`Error retrieving notifications: ${error.message}`);
    }
  };
  
  export const createNotification = async (req: Request, res: Response) => {
    const newNotificationData = req.body;
    try {
      const id = await notificationService.createNotification(newNotificationData);
      res.send(`Notification with id: ${id} created.`);
    } catch (error: any) {
      res.status(500).send(`Error creating notification: ${error.message}`);
    }
  };
  
  export const updateNotification = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const updatedNotificationData = req.body;
    try {
      const success = await notificationService.updateNotification(id, updatedNotificationData);
      if (success) {
        res.send(`Notification with id ${id} updated.`);
      } else {
        res.status(404).send(`Notification with id ${id} not found.`);
      }
    } catch (error: any) {
      res.status(500).send(`Error updating notification: ${error.message}`);
    }
  };
  
  export const deleteNotification = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    try {
      const success = await notificationService.deleteNotification(id);
      if (success) {
        res.send(`Notification with id ${id} deleted.`);
      } else {
        res.status(404).send(`Notification with id ${id} not found.`);
      }
    } catch (error: any) {
      res.status(500).send(`Error deleting notification: ${error.message}`);
    }
  };
  
  export const getNotificationById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    try {
      const notification = await notificationService.getNotificationById(id);
      if (notification) {
        res.send(notification);
      } else {
        res.status(404).send(`Notification with id ${id} not found.`);
      }
    } catch (error: any) {
      res.status(500).send(`Error retrieving notification: ${error.message}`);
    }
  };
  