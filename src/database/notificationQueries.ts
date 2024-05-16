const getNotificationsQuery = `
  SELECT * FROM notifications;
`;

const createNotificationQuery = `
  INSERT INTO notifications (user_id, type, title, description) 
  VALUES ($1, $2, $3, $4)
  RETURNING id;
`;

const updateNotificationQuery = `
  UPDATE notifications
  SET user_id = $1, type = $2, title = $3, description = $4
  WHERE id = $5;
`;

const deleteNotificationQuery = `
  DELETE FROM notifications
  WHERE id = $1;
`;

const getNotificationByIdQuery = `
  SELECT * FROM notifications
  WHERE id = $1;
`;

export {
  getNotificationsQuery,
  createNotificationQuery,
  updateNotificationQuery,
  deleteNotificationQuery,
  getNotificationByIdQuery
};
