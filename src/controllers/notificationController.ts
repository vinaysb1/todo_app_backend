import { Request, Response } from "express";

interface Notification {
    id: number;
    [key: string]: any; 
  }
  
  const notifications: Notification[] = [];
  let idgen = 1;

 export const getNotifications = (req:Request,res:Response)=>{
    res.send(notifications);
 } 

 export const createNotification = (req: Request, res: Response) => {
        const newNotification: Notification = { ...req.body, id: idgen++ };
    notifications.push(newNotification);
    res.send(`Notification with id: ${newNotification.id}`);
  };

  export const updateNotification = (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const index = notifications.findIndex(n => n.id === id);
    if (index !== -1) {
      notifications[index] = { ...notifications[index], ...req.body };
      res.send(`Notification with id ${id} updated.`);
    } else {
      res.status(404).send(`Notification with id ${id} not found.`);
    }
  };

  export const deleteNotification = (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const index = notifications.findIndex(n => n.id === id);
    if (index !== -1) {
      notifications.splice(index, 1);
      res.send(`Notification with id ${id} deleted.`);
    } else {
      res.status(404).send(`Notification with id ${id} not found.`);
    }
  };
  export const getNotificationById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const notification = notifications.find(n => n.id === id);
    if (notification) {
      res.send(notification);
    } else {
      res.status(404).send(`Notification with id ${id} not found.`);
    }
  };