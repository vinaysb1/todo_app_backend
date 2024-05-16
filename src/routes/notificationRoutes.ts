import express from 'express';
import * as notificationController from '../controllers/notificationController';

const router = express.Router();

router.route('/')
  .get(notificationController.getNotifications)
  .post(notificationController.createNotification);

router.route('/:id')
  .put(notificationController.updateNotification)
  .delete(notificationController.deleteNotification)
  .get(notificationController.getNotificationById);

export default router;
