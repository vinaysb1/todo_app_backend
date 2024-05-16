import express from 'express';
import { createNotification, deleteNotification, getNotificationById, getNotifications, updateNotification } from '../controllers/notificationController';

const router = express.Router();

router.route('/')
  .get(getNotifications)
  .post(createNotification);

router.route('/:id')
  .put(updateNotification)
  .delete(deleteNotification)
  .get(getNotificationById);

export default router;
