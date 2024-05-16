import express from 'express';

interface Notification {
  id: number;
  [key: string]: any; 
}

const notifications: Notification[] = [];
let idgen = 1;

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send(notifications);
  })
  .post((req, res) => {
    console.log(req.body);
    const newNotification: Notification = { ...req.body, id: idgen++ };
    notifications.push(newNotification);
    res.send(`Notification with id: ${newNotification.id}`);
  });

router.route('/:id')
  .put((req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = notifications.findIndex(n => n.id === id);
    if (index !== -1) {
      notifications[index] = { ...notifications[index], ...req.body };

      res.send(`Notification with id ${id} updated.`);
    } else {
      res.status(404).send(`Notification with id ${id} not found.`);
    }
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = notifications.findIndex(n => n.id === id);
    if (index !== -1) {
      notifications.splice(index, 1);
      res.send(`Notification with id ${id} deleted.`);
    } else {
      res.status(404).send(`Notification with id ${id} not found.`);
    }
  })
  .get((req,res)=>{
    const id = parseInt(req.params.id,10);
    const notification = notifications.find(n => n.id ===id);
    if(notification){
res.send(notification)
    }else {
      res.status(404).send(`Notification with id ${id} not found.`)
    }
  })


export default router;
