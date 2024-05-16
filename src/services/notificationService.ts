import pool from '../database/database';
import { QueryResult } from 'pg';
import Notification from '../models/notificationModel';
import * as notificationQueries from '../database/notificationQueries';

const getNotifications = async (): Promise<Notification[]> => {
  try {
    const { rows }: QueryResult = await pool.query(notificationQueries.getNotificationsQuery);
    return rows;
  } catch (error) {
    throw new Error(`Error getting notifications: ${error}`);
  }
};

const createNotification = async (newNotificationData: Notification): Promise<number> => {
  const values = Object.values(newNotificationData);
  try {
    const { rows }: QueryResult = await pool.query(notificationQueries.createNotificationQuery, values);
    return rows[0].id;
  } catch (error) {
    throw new Error(`Error creating notification: ${error}`);
  }
};

const updateNotification = async (id: number, updatedNotificationData: Notification): Promise<boolean> => {
  const values = [...Object.values(updatedNotificationData), id];
  try {
    await pool.query(notificationQueries.updateNotificationQuery, values);
    return true;
  } catch (error) {
    throw new Error(`Error updating notification: ${error}`);
  }
};

const deleteNotification = async (id: number): Promise<boolean> => {
  try {
    await pool.query(notificationQueries.deleteNotificationQuery, [id]);
    return true;
  } catch (error) {
    throw new Error(`Error deleting notification: ${error}`);
  }
};

const getNotificationById = async (id: number): Promise<Notification | undefined> => {
  try {
    const { rows }: QueryResult = await pool.query(notificationQueries.getNotificationByIdQuery, [id]);
    return rows[0];
  } catch (error) {
    throw new Error(`Error getting notification by id: ${error}`);
  }
};

export {
  getNotifications,
  createNotification,
  updateNotification,
  deleteNotification,
  getNotificationById
};
