// index.ts

import express from 'express';
import todoRoutes from './routes/todoRoutes';
import swagger from './swagger/swagger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/todos', todoRoutes);

swagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});