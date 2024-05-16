// index.ts

import express from 'express';
import todoRoutes from './routes/todoRoutes';
import swagger from './swagger/swagger';
import notificationRoutes from './routes/notificationRoutes'



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/todos', todoRoutes);
app.use('/notifications',notificationRoutes);

swagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});